import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { host } from '../utils/APIRoutes';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loginMethod, setLoginMethod] = useState(null); // 'local' or 'authn'

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            // First check if user is logged in via AuthN (session-based)
            const { data } = await axios.get(`${host}/api/auth/authn/user`, {
                withCredentials: true,
            });
            if (data.status === true) {
                setUser(data.user);
                setLoginMethod('authn');
                setLoading(false);
                return;
            }
        } catch (err) {
            // AuthN session check failed, continue to check localStorage
        }

        // Check localStorage for legacy login
        const localUser = localStorage.getItem('DesTecho-user');
        if (localUser) {
            try {
                setUser(JSON.parse(localUser));
                setLoginMethod('local');
            } catch (e) {
                localStorage.removeItem('DesTecho-user');
            }
        }
        setLoading(false);
    };

    const loginLocal = (userData) => {
        localStorage.setItem('DesTecho-user', JSON.stringify(userData));
        setUser(userData);
        setLoginMethod('local');
    };

    const loginWithAuthN = () => {
        // Hit a protected endpoint — SDK's ensureAuthentictionFilter will redirect to AuthN
        window.location.href = `${host}/api/auth/authn/login`;
    };

    const logout = async () => {
        if (loginMethod === 'authn') {
            // Destroy session and redirect to login
            localStorage.removeItem('DesTecho-user');
            setUser(null);
            setLoginMethod(null);
            window.location.href = `${host}/api/auth/authn/logout`;
            return;
        }
        localStorage.removeItem('DesTecho-user');
        setUser(null);
        setLoginMethod(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                loginMethod,
                loginLocal,
                loginWithAuthN,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
