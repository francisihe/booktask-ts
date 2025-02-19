import admin from 'firebase-admin';
import dotenv from 'dotenv';

import { IFirebaseServiceAccount } from '../../types/config/firebaseServiceAccount';

dotenv.config();

// Opted to use CommonJS compatibility for importing the serviceAccountKey.json file, as asset type 'json' is still experimental in ES6 modules.
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const serviceAccount = require('./serviceAccountKey.json');

// Using LOCAL ENV for serviceAccountKey.json file
const serviceAccount: IFirebaseServiceAccount = {
    "type": process.env.FIREBASE_TYPE || '',
    "project_id": process.env.FIREBASE_PROJECT_ID || '',
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID || '',
    "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    "client_email": process.env.FIREBASE_CLIENT_EMAIL || '',
    "client_id": process.env.FIREBASE_CLIENT_ID || '',
    "auth_uri": process.env.FIREBASE_AUTH_URI || '',
    "token_uri": process.env.FIREBASE_TOKEN_URI || '',
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || '',
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL || ''
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;