import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

import connectDB from "./config/db.js";

// Import des routes
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";



import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

const app = express();

// CORS middleware - IMPORTANT: configurer avec credentials pour les cookies
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Cookie parser middleware
app.use(cookieParser());

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques du dossier uploads
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route de base
app.get("/", (req, res) => {
  res.send("API Krysto is running...");
});

// ==========================================
// ROUTES API
// ==========================================



// Utilisateurs & Authentification
app.use("/api/users", userRoutes);




// Upload de fichiers
app.use("/api/upload", uploadRoutes);



// ==========================================
// ERROR MIDDLEWARES
// ==========================================

app.use(notFound);
app.use(errorHandler);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});