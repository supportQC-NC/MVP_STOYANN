import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  getUsers
} from "../controllers/userController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();


// ==========================================
// PUBLIC ROUTES
// ==========================================

// inscription
router.post("/", registerUser);

// connexion
router.post("/login", loginUser);

// verification email
router.get("/verify-email/:token", verifyEmail);

// mot de passe oublié
router.post("/forgot-password", forgotPassword);

// reset password
router.put("/reset-password/:token", resetPassword);



// ==========================================
// USER ROUTES (authentifié)
// ==========================================

// logout
router.post("/logout", protect, logoutUser);

// profil utilisateur
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);



// ==========================================
// ADMIN ROUTES
// ==========================================

// liste utilisateurs
router.get("/", protect, admin, getUsers);



export default router;