// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, orderBy, limit } from "firebase/firestore";

// Your web app's Firebase configuration
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

// Initialize Cloud Firestore for Lead Database & Click Logs
export const db = getFirestore(app);

// Initialize Google Analytics safely
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

/**
 * Log custom analytics event to Firebase / GA4
 */
export const trackAnalyticsEvent = (eventName, eventParams = {}) => {
  try {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
  } catch (err) {
    // Fail silently in development or when blocked
  }
};

export { collection, addDoc, serverTimestamp, getDocs, query, orderBy, limit };
export default app;
