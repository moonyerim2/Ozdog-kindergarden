import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-RBz8X-Edd7xR_1y9EmPCxYA_mcXAE3k",
  authDomain: "ozdog-kindergarten.firebaseapp.com",
  projectId: "ozdog-kindergarten",
  storageBucket: "ozdog-kindergarten.appspot.com",
  messagingSenderId: "114643518987",
  appId: "1:114643518987:web:a267b097a654c9e502e90e",
  measurementId: "G-EZF4DJEJK8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "customer_info"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
