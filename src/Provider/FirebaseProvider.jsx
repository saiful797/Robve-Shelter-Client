import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const FirebaseProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Create user with email and password
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Update user profile with name and imageURL
    const updateUserProfile = (name, imageURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageURL
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }
            setLoading(false);
        })

        return () => unsubscribe ();
    },[])

    const authInfo ={
        signUpUser, 
        updateUserProfile,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes ={
    children: PropTypes.node,
}
export default FirebaseProvider;