import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(true)
    const [user,setuser]=useState(null)
    const creatuser=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinuser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
const googlelogin=()=>{
   return signInWithPopup(auth, googleProvider)
}


    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (currentuser)=>{
      setuser(currentuser)
      setLoader(false)
        })
       
return()=>{
    unsubscribe()
}
    },[])
    const authInfu={
        user,loader,creatuser,signinuser,googlelogin
    }
    console.log(user)
    return (
        <AuthContext.Provider value={authInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;