import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
    
    isLoggedIn: true,
    onLoginHandler: () => { }
});

export default AuthContext;