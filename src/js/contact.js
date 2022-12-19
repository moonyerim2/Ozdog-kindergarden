import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

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

const contactForm = document.querySelector(".contact_form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const contactName = document.querySelector("#contact_name");
  const contactPhone = document.querySelector("#contact_phone");

  if ((contactName.value === "") | (contactPhone.value === "")) return;

  await setDoc(doc(db, "customer_info", String(uuidv4())), {
    name: contactName.value,
    phone: contactPhone.value,
  });

  contactName.value = "";
  contactPhone.value = "";
});
