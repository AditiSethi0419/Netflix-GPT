// src/utils/auth.js
import { auth } from "./firebase"; // relative import from utils folder
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUp = async (email, password , firstname , lastname) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password , firstname , lastname);
    return { user: userCredential.user };
  } catch (error) {
    return { error };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    return { error };
  }
};
