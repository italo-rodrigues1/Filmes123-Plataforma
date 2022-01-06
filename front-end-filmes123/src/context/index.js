import { createContext } from 'react';
import LoginUser from '../hooks/user';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const { senhaD,setSenhaD,emailD,setEmailD,handleLogin,handleLogout } = LoginUser();

    return (
        <AuthContext.Provider value={{senhaD,setSenhaD,emailD,setEmailD,handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContextProvider, AuthContext };