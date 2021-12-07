import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
    
    isLoggedIn: false,
    onLoginHandler: () => { }
});

export default AuthContext;