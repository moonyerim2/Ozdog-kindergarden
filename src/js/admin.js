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

const tbody = document.querySelector("tbody");
const tableItemTemplate = (index, name, phone) => `<tr>
    <td>${index}</td>
    <td>${name}</td>
    <td>무료체험 문의</td>
    <td>없음</td>
    <td>비회원</td>
    <td>${phone}</td>
    <td>2022.11.${6 + index}</td>
  </tr>`;

let index = 1;
const querySnapshot = await getDocs(collection(db, "customer_info"));
querySnapshot.forEach((doc) => {
  const { name, phone } = doc.data();
  tbody.insertAdjacentHTML("beforeend", tableItemTemplate(index, name, phone));
  index++;
});
