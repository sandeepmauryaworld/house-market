import React,{useEffect,useState} from "react";
import { getAuth,onAuthStateChanged} from 'firebase/auth'

const useAuthState = () => {

    const [loggedIn,setloggedIn]=useState(false)
    const [checkState,setCheckState]=useState(true)


    useEffect(()=>{
        const auth=getAuth();
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setloggedIn(true)
            }
            setCheckState(false)
        })

    })

  return {loggedIn,checkState }
}

export default useAuthState