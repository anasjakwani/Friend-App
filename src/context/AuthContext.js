import {createContext}from "react";


const Authcontext = createContext({
    isLoggedIn: true,
    onLogin: ()=>{},
    onLogout: ()=>{}
})


export default Authcontext;