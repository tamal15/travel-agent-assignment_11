import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext=createContext()
const AuthProvider = (props) => {
    const {children}=props

    const Allcontext=useFirebase()
    return (
        <AuthContext.Provider value={Allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;