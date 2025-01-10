import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import axios from "axios";

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
           return signInWithPopup(auth, provider)
    }

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const updateUserProfile = (updatedProfileData) => {
        return updateProfile(auth.currentUser, updatedProfileData) 
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if(currentUser?.email){
                const user = { email: currentUser.email};

                axios.post('http://localhost:3000/jwt', user, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                    setLoading(false);
                }
                )

            } else {
                axios.post('http://localhost:3000/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false);
                }
                )
            }
            setLoading(false);
      })

      return () => {
        unSubscribe();
      }

    },[])






    const userInfo ={
        user,
        setUser,
        loading,
        setLoading,
        register,
        login,
        updateUserProfile,
        signout,
        googleLogin,
        errorMessage,
        setErrorMessage,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;