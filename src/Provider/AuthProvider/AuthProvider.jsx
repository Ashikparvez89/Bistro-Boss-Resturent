import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
export const Authcontext = createContext(null);
const axiosPublic = useAxiosPublic();

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
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
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
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      const userInfo = { email: currentuser?.email };
      console.log("this is current user", currentuser);
      if (currentuser) {
        // create a token for user
        axiosPublic.post("jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        //Do something here
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });
    return unSubscribe;
  }, [axiosPublic]);

  const authInfo = {
    googleLogin,
    createuser,
    githublogin,
    logOut,
    user,
    logInuser,
    updateUserProfile,
    loading,
  };
  return (
    <div>
      <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    </div>
  );
};

export default AuthProvider;
