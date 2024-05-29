import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import { useLocation } from "react-router-dom";
export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleAuth = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };
  const githubAuth = new GithubAuthProvider();
  const githublogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuth);
  };
  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);
  const authInfo = {
    googleLogin,
    createuser,
    githublogin,
    logOut,
    user,
    logInuser,
  };
  return (
    <div>
      <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default AuthProvider;
