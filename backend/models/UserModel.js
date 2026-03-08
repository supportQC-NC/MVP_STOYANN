import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: [true, "Le nom est requis"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "Email requis"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email invalide"
    ]
  },

  password: {
    type: String,
    required: [true, "Mot de passe requis"],
    minlength: 6,
    select: false
  },

  role: {
    type: String,
    enum: ["user", "admin", "manager"],
    default: "user"
  },

  avatar: {
    type: String,
    default: ""
  },

  company: {
    type: String,
    trim: true
  },

  plan: {
    type: String,
    enum: ["free", "pro", "enterprise"],
    default: "free"
  },

  emailVerified: {
    type: Boolean,
    default: false
  },

  emailVerificationToken: String,
  emailVerificationExpire: Date,

  passwordResetToken: String,
  passwordResetExpire: Date,

  passwordChangedAt: Date,

  lastLogin: Date,

  isActive: {
    type: Boolean,
    default: true
  }

},
{
  timestamps: true
}
);




/* ============================
HASH PASSWORD
============================ */

userSchema.pre("save", async function(next){

  if(!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();

});




/* ============================
COMPARE PASSWORD
============================ */

userSchema.methods.comparePassword = async function(password){

  return await bcrypt.compare(password, this.password);

};




/* ============================
EMAIL VERIFICATION TOKEN
============================ */

userSchema.methods.createEmailVerificationToken = function(){

  const token = crypto.randomBytes(32).toString("hex");

  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  this.emailVerificationExpire = Date.now() + 24 * 60 * 60 * 1000;

  return token;

};




/* ============================
PASSWORD RESET TOKEN
============================ */

userSchema.methods.createPasswordResetToken = function(){

  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;

};




/* ============================
CHECK PASSWORD CHANGE
============================ */

userSchema.methods.changedPasswordAfter = function(JWTTimestamp){

  if(this.passwordChangedAt){

    const changedTimestamp =
      parseInt(this.passwordChangedAt.getTime() / 1000, 10);

    return JWTTimestamp < changedTimestamp;

  }

  return false;

};



const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;