import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/UserModel.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/sendEmail.js";
import generateToken from "../utils/generateToken.js";


// ==========================================
// LOGIN
// ==========================================

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(401);
    throw new Error("Email ou mot de passe invalide");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    res.status(401);
    throw new Error("Email ou mot de passe invalide");
  }

  if (!user.emailVerified) {
    res.status(401);
    throw new Error("Veuillez vérifier votre email");
  }

  user.lastLogin = Date.now();
  await user.save();

  generateToken(res, user._id);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    plan: user.plan,
    avatar: user.avatar
  });

});



// ==========================================
// REGISTER
// ==========================================

const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Cet email est déjà utilisé");
  }

  const user = await User.create({
    name,
    email,
    password
  });

  const verificationToken = user.createEmailVerificationToken();

  await user.save({ validateBeforeSave:false });

  const verifyURL =
    `${process.env.CLIENT_URL}/verify-email/${verificationToken}`;

  await sendEmail({
    email: user.email,
    subject: "Vérifiez votre email",
    html: `
      <h2>Bienvenue ${user.name}</h2>
      <p>Veuillez vérifier votre email :</p>
      <a href="${verifyURL}">Vérifier mon compte</a>
    `
  });

  res.status(201).json({
    message:"Utilisateur créé. Vérifiez votre email."
  });

});



// ==========================================
// VERIFY EMAIL
// ==========================================

const verifyEmail = asyncHandler(async (req,res)=>{

  const token = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    emailVerificationToken:token,
    emailVerificationExpire:{ $gt: Date.now() }
  });

  if(!user){
    res.status(400);
    throw new Error("Token invalide ou expiré");
  }

  user.emailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpire = undefined;

  await user.save();

  res.json({message:"Email vérifié avec succès"});

});



// ==========================================
// LOGOUT
// ==========================================

const logoutUser = asyncHandler(async (req,res)=>{

  res.cookie("token","",{
    httpOnly:true,
    expires:new Date(0)
  });

  res.json({message:"Déconnexion réussie"});

});



// ==========================================
// PROFILE
// ==========================================

const getUserProfile = asyncHandler(async (req,res)=>{

  const user = await User.findById(req.user._id);

  res.json({
    _id:user._id,
    name:user.name,
    email:user.email,
    role:user.role,
    plan:user.plan,
    avatar:user.avatar,
    company:user.company
  });

});



// ==========================================
// UPDATE PROFILE
// ==========================================

const updateUserProfile = asyncHandler(async (req,res)=>{

  const user = await User.findById(req.user._id);

  if(!user){
    res.status(404);
    throw new Error("Utilisateur non trouvé");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.company = req.body.company || user.company;

  if(req.body.password){
    user.password = req.body.password;
  }

  const updatedUser = await user.save();

  res.json({
    _id:updatedUser._id,
    name:updatedUser.name,
    email:updatedUser.email,
    role:updatedUser.role,
    plan:updatedUser.plan
  });

});



// ==========================================
// FORGOT PASSWORD
// ==========================================

const forgotPassword = asyncHandler(async (req,res)=>{

  const user = await User.findOne({email:req.body.email});

  if(!user){
    res.status(404);
    throw new Error("Utilisateur introuvable");
  }

  const resetToken = user.createPasswordResetToken();

  await user.save({ validateBeforeSave:false });

  const resetURL =
    `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  await sendEmail({
    email:user.email,
    subject:"Réinitialisation du mot de passe",
    html:`
      <p>Vous avez demandé un reset password :</p>
      <a href="${resetURL}">Réinitialiser</a>
    `
  });

  res.json({message:"Email de reset envoyé"});

});



// ==========================================
// RESET PASSWORD
// ==========================================

const resetPassword = asyncHandler(async (req,res)=>{

  const token = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken:token,
    passwordResetExpire:{ $gt: Date.now() }
  });

  if(!user){
    res.status(400);
    throw new Error("Token invalide ou expiré");
  }

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpire = undefined;

  await user.save();

  generateToken(res,user._id);

  res.json({message:"Mot de passe mis à jour"});

});



// ==========================================
// ADMIN - GET USERS
// ==========================================

const getUsers = asyncHandler(async (req,res)=>{

  const users = await User.find().select("-password");

  res.json(users);

});



export {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  getUsers
};