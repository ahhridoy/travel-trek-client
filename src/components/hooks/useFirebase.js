import { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                savedUser(email, name, "POST");
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {});
                    navigate("/");
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (location, navigate) => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                savedUser(user.email, user.displayName, "PUT");
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe user state
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
    }, [auth]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    const logOut = (navigate) => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setAuthError(error);
            })
            .finally(() => setIsLoading(false));
    };

    const savedUser = (email, displayName, method) => {
        const users = { email, displayName };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        }).then();
    };

    return {
        user,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        isLoading,
        authError,
        admin,
    };
};

export default useFirebase;





// import { useEffect, useState } from "react";
// import {
//     getAuth,
//     signInWithPopup,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     updateProfile,
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     signOut,
// } from "firebase/auth";
// import initializeAuthentication from "../Firebase/firebase.init";

// initializeAuthentication();

// const useFirebase = () => {
//     // useStates
//     const [user, setUser] = useState({});
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//     const auth = getAuth();

//     // google sign in function
//     const signInWithGoogle = (location, history) => {
//         const googleProvider = new GoogleAuthProvider();
//         // isLoading(true)
//         signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 const user = result.user;
//                 savedUser(user.email, user.displayName, "PUT");
//                 // const destination = location?.state?.from || "/";
//                 // history.replace(destination);
//                 setError("");
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     };

//     const registerUser = (email, password, name, history) => {
//         // setIsLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(() => {
//                 const newUser = { email, displayName: name };
//                 setUser(newUser);
//                 savedUser(email, name, "POST");
//                 // savedUser(email, name, "POST");
//                 updateProfile(auth.currentUser, {
//                     displayName: name,
//                 });
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//         // .finally(() => setIsLoading(false));
//     };

//     const loginUser = (email, password, location, history) => {
//         // setIsLoading(true);
//         signInWithEmailAndPassword(auth, email, password)
//             .then(() => {
//                 // const destination = location?.state?.from || "/";
//                 // history.replace(destination);
//                 setError("");
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//         // .finally(() => setIsLoading(false));
//     };

//     // observe user state change
//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser({});
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, []);

//     // sign out function
//     const logOut = (history) => {
//         signOut(auth)
//             .then(() => {
//                 // history.replace("/");
//                 setError("");
//             })
//             .catch((error) => {
//                 setError(error);
//             });
//     };

//     const savedUser = (email, displayName, method) => {
//         const users = { email, displayName };
//         fetch("http://localhost:5000/users", {
//             method: method,
//             headers: {
//                 "content-type": "application/json",
//             },
//             body: JSON.stringify(users),
//         }).then();
//     };
//     return {
//         user,
//         signInWithGoogle,
//         loginUser,
//         registerUser,
//         logOut,
//         isLoading,
//         error,
//     };
// };

// export default useFirebase;
