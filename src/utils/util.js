import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOrs1FknAQduaWqLnTe0r_Ou_flrjSssY",
  authDomain: "ecommerce-130ee.firebaseapp.com",
  projectId: "ecommerce-130ee",
  storageBucket: "ecommerce-130ee.appspot.com",
  messagingSenderId: "554528854752",
  appId: "1:554528854752:web:9007e272d80ced4d13b685",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const singWithGoogle = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const getUsertDocument = async (userAuth, additional = {}) => {
  const userDoc = doc(db, "user", userAuth.uid);
  console.log(userDoc);
  const snapShot = await getDoc(userDoc);
  console.log(snapShot);
  console.log(snapShot.exists());
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createA = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createA,
        ...additional,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userDoc;
};
export const createAutUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const userSingnIn = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedHandler = (callback) => {
  onAuthStateChanged(auth, callback);
};
