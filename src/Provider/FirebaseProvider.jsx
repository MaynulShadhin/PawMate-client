import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider;
const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user
    const updateUser = (fullName, image) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: image
        })
    }
    //login in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    //logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user on observation', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const allValues = {
        user,
        loading,
        createUser,
        updateUser,
        signInUser,
        googleLogin,
        logout
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node
}
export default FirebaseProvider;
