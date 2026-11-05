// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRMpvG3ri5aEe2b0CpK0zj-3aH7UV7Gmo",
  authDomain: "omintech.firebaseapp.com",
  projectId: "omintech",
  storageBucket: "omintech.firebasestorage.app",
  messagingSenderId: "983545508778",
  appId: "1:983545508778:web:d7dbfe24195e32c97671d3",
  measurementId: "G-TTGGDQN34C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics safely (supports browser environments and avoids crashes if blocked)
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics not supported or blocked by client
  });
}

export default app;
