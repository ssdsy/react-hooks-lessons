import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

// interfaceでも可
type User = {
    id: string;
    username: string;
    email: string;
};

interface AuthContextType {
    user: User | null;
    login: (userInfo: User) => void;
    logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used withi an AuthProvider");
    }
    return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = useCallback((userInfo: User) => {
        if (userInfo.username === "testUser" && userInfo.email === "test@example.com") {
            setUser(userInfo);
        } else {
            console.log("can't logged in.");
        }
    }, []); // 再生成する必要がないので依存配列は空

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    // const login = (userInfo: User) => {
    //     if (userInfo.username === "testUser" && userInfo.email === "test@example.com") {
    //         setUser(userInfo);
    //     } else {
    //         console.log("can't logged in.");
    //     }
    // };

    // const logout = () => {
    //     setUser(null);
    // };

    // メモ化
    //
    const contextValue = useMemo(() => ({ user, login, logout }), [user, login, logout]);
    // const contextValue = {
    //     user,
    //     login,
    //     logout,
    // };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
