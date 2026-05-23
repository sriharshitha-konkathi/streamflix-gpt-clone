import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfxcTL2hU5lE3wDf6gb-wdW82Ls5dIf8E",
  authDomain: "netflix-gpt-clone-49fa0.firebaseapp.com",
  projectId: "netflix-gpt-clone-49fa0",
  storageBucket: "netflix-gpt-clone-49fa0.firebasestorage.app",
  messagingSenderId: "381600372674",
  appId: "1:381600372674:web:ac6f96145ead616c87e85b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
