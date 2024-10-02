import {useState,useEffect,createContext} from 'react'
import { auth } from '../services/firebaseconfig'
import {createUserWithEmailAndPassword,signOut as firebaseSignOut,
signInWithEmailAndPassword,setPersistence,browserLocalPersistence,
onAuthStateChanged,sendPasswordResetEmail} from "firebase/auth";
import { toast } from 'react-toastify';


//creating the store
export const AuthContexts=createContext()

//2.AuthContext is provider which provides the values of the store to different child components
const AuthContext = ({children}) => {
const [isLoggedIn,setIsLoggedIn]=useState(false)
const [isUserlogged,setIsUserLogged]=useState(null)
const [isloading,setIsLoading]=useState(true)

useEffect(()=>{

  const setAuthPersistence=async()=>{
    try{
      await setPersistence(auth, browserLocalPersistence)

    }catch(error){
      toast.error("error is setting the persistence")

    }
  }

  setAuthPersistence()

  let unSubscribe=onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLoggedIn(true)
        setIsUserLogged(user)
      }else{
        setIsLoggedIn(false)
        setIsUserLogged(null)
      }
      setIsLoading(false)
    });
  
  
  //clean up function
  return()=>unSubscribe()
},[])


  //1. creating the User
  const createUser=async(data)=>{
    try {
      await createUserWithEmailAndPassword(auth,data.email,data.password)
      toast.success("Registered Successfully")
      return true;

    }catch(error){
      toast.error("Registration fails")
      return false;

    }

  }

  //2.Login The User
  const userLogin=async(data)=>{
    try {
      await signInWithEmailAndPassword(auth,data.email,data.password)
      toast.success("Login Successfully")
      return true;

    }catch(error){
      toast.error("Login fails")
      return false;

    }

  }

  //3.Logout the User
  const signOut=async()=>{
    try{
      await firebaseSignOut(auth)
      toast.success("Successfully signout")
      return true;

    }catch(error){
      toast.error("unable to signout")
      return false;

    }
  }
//resetting the password
const resetPassword=async(email)=>{
  try{
    await sendPasswordResetEmail(auth,email)
    toast.success("Reset mail send successfully")
    return true

  }catch(error){
    toast.error("Failed to send reset mail")
    return false

  }
}


  return (
    <AuthContexts.Provider value={{createUser,userLogin,isLoggedIn,isUserlogged,isloading,signOut,resetPassword}}>
      {children}
    </AuthContexts.Provider>
   
  )
}

export default AuthContext
