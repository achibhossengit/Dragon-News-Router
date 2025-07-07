import { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "kuddus ali",
        email: "kuddus@gmail.com",
    })

    return (
        <AuthContext value={{user}}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;