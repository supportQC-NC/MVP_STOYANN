import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// Models
import User from "./models/UserModel.js";



// Data
import users from "./data/users.js";


// Config
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // ============================================
    // 1. NETTOYER LA BASE DE DONNÉES
    // ============================================

    await User.deleteMany();


    console.log("🗑️  Base de données nettoyée".yellow);

    // ============================================
    // 2. INSÉRER LES UTILISATEURS
    // ============================================
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    console.log(`✅ ${createdUsers.length} utilisateurs créés`.green);

    // Stats utilisateurs
    const adminCount = createdUsers.filter(u => u.isAdmin).length;
    const proCount = createdUsers.filter(u => u.isPro).length;
    const pendingProCount = createdUsers.filter(u => u.proStatus === "pending").length;
    const suspendedProCount = createdUsers.filter(u => u.proStatus === "suspended").length;
    console.log(`   - ${adminCount} admins`.cyan);
    console.log(`   - ${proCount} utilisateurs Pro actifs`.cyan);
    console.log(`   - ${pendingProCount} demandes Pro en attente`.cyan);
    console.log(`   - ${suspendedProCount} comptes Pro suspendus`.cyan);





    console.log("🎉 Données importées avec succès !".green.bold);
  } catch (error) {
    console.error(`❌ Erreur: ${error.message}`.red.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Universe.deleteMany();
    await SubUniverse.deleteMany();
    await Prospect.deleteMany();
    await Contact.deleteMany();
    await ProRequest.deleteMany();
    await ProOrder.deleteMany();
    await ReapproRequest.deleteMany();
    await MailingCampaign.deleteMany();
    await NewsletterCampaign.deleteMany();

    console.log("🗑️  Toutes les données ont été supprimées !".red.bold);
    process.exit();
  } catch (error) {
    console.error(`❌ Erreur: ${error.message}`.red.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
