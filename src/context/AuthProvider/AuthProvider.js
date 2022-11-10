import React, { createContext, useEffect, useState } from 'react';
import app from '../../components/firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password)=>{

        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOutUser =()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });

        return () => {
            return unSubcribe()
        }
    })
    const authInfo = { user, createUser, loginUser, logOutUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;