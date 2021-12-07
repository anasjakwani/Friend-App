import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import LoginRouting from "./LoginRouting";
import WebRouting from "./WebRouting";

const AuthHandler = ({onLoginHandler}) => {
    
    const authCtx = useContext(AuthContext);
    return authCtx.isLoggedIn ? <WebRouting /> : <LoginRouting onLogin={onLoginHandler}/>
}

export default AuthHandler;