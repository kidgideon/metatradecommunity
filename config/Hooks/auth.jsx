import { useState, useEffect } from "react";
import { auth, db } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const defaultImage =
  "https://firebasestorage.googleapis.com/v0/b/metatradecommunity.firebasestorage.app/o/default.jpg?alt=media&token=d2ac2ef2-144c-4ac9-8149-3afb024a8808";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // SIGN UP
  const signup = async ({
    email,
    password,
    firstName,
    lastName,
    username,
    identificationNumber,
    phoneNumber,
    dateOfBirth,
  }) => {
    const toastId = toast.loading("Creating your account...");

    try {
      const usersRef = collection(db, "users");

      const [emailSnap, usernameSnap] = await Promise.all([
        getDocs(query(usersRef, where("email", "==", email))),
        getDocs(query(usersRef, where("username", "==", username))),
      ]);

      if (!emailSnap.empty) {
        toast.dismiss(toastId);
        toast.error("Email is already registered.");
        return { success: false };
      }

      if (!usernameSnap.empty) {
        toast.dismiss(toastId);
        toast.error("Username is already taken.");
        return { success: false };
      }

      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "users", cred.user.uid);

      await setDoc(userRef, {
        uid: cred.user.uid,
        email,
        username,
        firstName,
        lastName,
        identificationNumber,
        phoneNumber,
        dateOfBirth,
        notifications: [],
        role: "client",
        createdAt: Date.now(),
        walletBalance: 0,
        transactions: [],
        assets: [],
        bio: "joined meta trade community",
        location: "US",
        followers: 0,
        following: 0,
        accountLevel: "basic",
        isActivated: false,
        picture: defaultImage,
      });

      // Send verification email
      await sendEmailVerification(cred.user);
      toast.success("Account created! Please check your email for a verification link.", { id: toastId });

      // Sign out immediately to prevent unverified login
      await signOut(auth);
      navigate("/login");

      return { success: true, uid: cred.user.uid };
    } catch (err) {
      toast.error(err.message || "Account creation failed.", { id: toastId });
      return { success: false };
    }
  };

  // LOGIN
const login = async (email, password) => {
  const toastId = toast.loading("Logging in...");

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);

    if (!result.user.emailVerified) {
      // Send verification email again
      await sendEmailVerification(result.user);

      await signOut(auth);
      toast.error(
        "Your email is not verified. We've sent you a new verification email — please check your inbox.",
        { id: toastId }
      );
      return { success: false };
    }

    toast.success("Logged in successfully!", { id: toastId });
    return { success: true, user: result.user };
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      toast.error("No user with this email.", { id: toastId });
    } else if (err.code === "auth/wrong-password") {
      toast.error("Incorrect password.", { id: toastId });
    } else {
      toast.error(err.message || "Login failed.", { id: toastId });
    }
    return { success: false };
  }
};


  // GOOGLE LOGIN (No Signup)
  const loginWithGoogle = async () => {
    const toastId = toast.loading("Signing in with Google...");
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { uid, email, displayName, photoURL } = result.user;

      const userRef = doc(db, "users", uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // Prevent signup with Google
        toast.error("No user with this email. Please sign up using email/password.", { id: toastId });
        await signOut(auth);
        return { success: false };
      }

      if (!result.user.emailVerified) {
        await signOut(auth);
        toast.error("Your email has not been verified. Please verify before logging in.", { id: toastId });
        return { success: false };
      }

      toast.success("Welcome back!", { id: toastId });
      return { success: true, user: result.user };
    } catch (err) {
      toast.error("Google login failed.", { id: toastId });
      return { success: false };
    }
  };

  const logout = async () => {
    await signOut(auth);
    toast.success("Logged out.");
  };

  return {
    user,
    signup,
    login,
    loginWithGoogle,
    logout,
  };
};

export default useAuth;
