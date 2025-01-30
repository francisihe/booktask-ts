import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
export const MONGO_URL = process.env.MONGO_URL;
export const NODE_ENV = process.env.NODE_ENV;
export const EMAIL = process.env.EMAIL;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
export const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
export const CLIENT_URL = process.env.CLIENT_URL;