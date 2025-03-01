const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config();

if (!admin.apps.length) {
    const serviceAccount = require("./firebase-service-account.json");
  
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

module.exports = admin;