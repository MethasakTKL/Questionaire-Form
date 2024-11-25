import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export default firebaseConfig;

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,ßßß
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//   };
// FIREBASE_API_KEY=AIzaSyCJvUfG7iRGlLI_jYsSy_ZMdSGobHb6Ris,
// FIREBASE_AUTH_DOMAIN=questionaire-foxbith.firebaseapp.com,
// FIREBASE_PROJECT_ID=questionaire-foxbith,
// FIREBASE_STORAGE_BUCKET=questionaire-foxbith.firebasestorage.app,
// FIREBASE_MESSAGING_SENDER_ID=568011226560,
// FIREBASE_APP_ID=1:568011226560:web:a290cfa3fcb86b3c91dc25,
// FIREBASE_MEASUREMENT_ID=G-L4PJ2Y42E4
