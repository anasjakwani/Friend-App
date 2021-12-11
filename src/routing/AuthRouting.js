import { useEffect, useState } from "react";
import Authcontext from "../context/AuthContext";
import AuthHandler from "../context/AuthHandler";



const AuthRouting = () => {
    
    const [isAuth, setIsAuth]=useState(true);
    useEffect(()=>{
      const isStorage= localStorage.getItem("isAuth")==="0"
      setIsAuth(isStorage)
    },[])

    const onLogin=()=>{
        localStorage.setItem("isAuth", "1")
        setIsAuth(false);
    };
    const onLogout=()=>{
      localStorage.setItem("isAuth", "0")
        setIsAuth(true);
    
    };
    console.log(isAuth)
  return (
    <Authcontext.Provider value={{isLoggedIn:isAuth,onLogin,onLogout}}>
      <AuthHandler/>
    </Authcontext.Provider>
  );
};

export default AuthRouting;
