"use client";

import { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";


export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in with Google (returns promise so caller can await)
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Track auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // Context value
  const allInformation = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={allInformation}>
      {children}
    </AuthContext.Provider>
  );
}