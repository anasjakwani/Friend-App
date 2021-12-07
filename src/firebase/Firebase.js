import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiSMhU9F5VrD6t3YUcsHNgFcHFNjbDQdA",
  authDomain: "react-team-7007a.firebaseapp.com",
  projectId: "react-team-7007a",
  storageBucket: "react-team-7007a.appspot.com",
  messagingSenderId: "1027971868439",
  appId: "1:1027971868439:web:c9c198371478602e66b952",
  measurementId: "G-1GR4XY3CLY",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
