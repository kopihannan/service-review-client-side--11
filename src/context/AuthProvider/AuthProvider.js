import React, { createContext } from 'react';
import {getAuth} from 'firebase/app'
import app from '../../components/firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = () => {

    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;