import { createContext } from 'react';
import useUserAuth from '../hooks/user';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    // const { user, setUser } = useUserAuth();
    
    return (
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContextProvider, AuthContext };