import {createContext, ReactNode, useContext, useState} from "react";

type AuthContextType = {
    isRegister: boolean;
    setIsRegister: (isOut: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
    isRegister: false,
    setIsRegister: () => {
        false;
    },
});

type AuthProviderType = {
    children: ReactNode;
};

export function useAuth(): AuthContextType {
    return useContext(AuthContext);
}

export default function AuthProvider(props: AuthProviderType) {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <AuthContext.Provider value={{isRegister, setIsRegister}}>
            {props.children}
        </AuthContext.Provider>
    );
}
