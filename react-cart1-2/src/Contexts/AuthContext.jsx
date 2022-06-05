import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false);

    const handleAuth = () => {
        setIsAuth(!isAuth);
    }

    <AuthContext.Provider value={{isAuth, setIsAuth, handleAuth}}>
        {children}
    </AuthContext.Provider>
}