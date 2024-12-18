import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
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
const signOutuser=()=>{
    setLoader(true)
    return signOut(auth)
}

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (currentuser)=>{
      setuser(currentuser)
      console.log('current user',currentuser)
      if(currentuser?.email){
                 const user={email:currentuser.email}
                 axios.post('https://job-portal-server-alpha-two.vercel.app/jwt',user)
                 .then(res=>{
                    console.log(res.data)
                    setLoader(false)
                })
      }
      else{
        axios.post('https://job-portal-server-alpha-two.vercel.app/logout',{},{
            withCredentials:true
        })
        .then(res=>{
            console.log("log OUt",res.data)
            setLoader(false)
        })
      }
        //put in the right place
      setLoader(false)
        })
    
       
return()=>{
    unsubscribe()
}
    },[])
    const authInfu={
        user,loader,creatuser,signinuser,googlelogin,signOutuser
    }
    console.log(user)
    return (
        <AuthContext.Provider value={authInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;