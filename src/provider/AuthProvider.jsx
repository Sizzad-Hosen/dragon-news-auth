import { createContext, useEffect, useState } from "react";
import { getAuth ,  createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import app from "../firebase/firebase.config";
export const Authcontext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email , password);

    }
const signInUser = (email , password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);

}
    const logOut = ()=>{
        setLoading(false);
      return signOut(auth);
    }

   useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth ,currentUser=>{
        console.log('user in the auth state chanaged', currentUser);
        setUser(currentUser);
        setLoading(false);

    });
    return ()=>{
        unSubcribe();
    }

   },[])

    const authInfo = {
        user, 
        loading,
        createUser,
        logOut,
        signInUser,


    }
    return (
      <Authcontext.Provider value={authInfo}>
        {children}
      </Authcontext.Provider>
    );
};

export default AuthProvider;