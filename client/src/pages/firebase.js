import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAZBmU7qwZNVmiUfoGhDFZ76DsIQa8aBiQ",
  authDomain: "destecho-852e4.firebaseapp.com",
  projectId: "destecho-852e4",
  storageBucket: "destecho-852e4.appspot.com",
  messagingSenderId: "23910509724",
  appId: "1:23910509724:web:a6cfe2857f83e0a5579159",
  measurementId: "G-J5F8G2199S"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);