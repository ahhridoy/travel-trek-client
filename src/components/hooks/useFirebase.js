import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // useStates
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // google sign in function
  const signInWithGoogle = (location, history) => {
    const googleProvider = new GoogleAuthProvider();
    // isLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // const destination = location?.state?.from || "/";
        // history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // const destination = location?.state?.from || "/";
        // history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // sign out function
  const logOut = (history) => {
    signOut(auth)
      .then(() => {
        // history.replace("/");
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return {
    user,
    signInWithGoogle,
    loginUser,
    logOut,
    isLoading,
    error,
  };
};

export default useFirebase;
