import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// PREENCHA com os dados do seu Firebase (nunca use o arquivo adminsdk aqui!)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SUA_AUTH_DOMAIN",
  projectId: "SUA_PROJECT_ID",
  storageBucket: "SUA_STORAGE_BUCKET",
  messagingSenderId: "SUA_MESSAGING_SENDER_ID",
  appId: "SUA_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
