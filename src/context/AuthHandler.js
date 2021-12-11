import {useContext} from 'react'
import Authcontext from './AuthContext';
import WebRouting from '../routing/WebRouting'
import LoginRouting from '../routing/LoginRouting'

const AuthHandler =()=>{
    
    const authCtx = useContext(Authcontext);
    return (
    authCtx.isLoggedIn ? <LoginRouting /> : <WebRouting />)
}


export default AuthHandler;