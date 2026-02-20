import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const AuthNCallback = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { checkAuth } = useAuth();

    useEffect(() => {
        const handleCallback = async () => {
            const success = searchParams.get('success');
            const error = searchParams.get('error');

            if (success === 'true') {
                // Re-check auth to pick up the session-based AuthN user
                await checkAuth();
                navigate('/');
            } else if (error) {
                console.error('AuthN login error:', error);
                navigate(`/login?error=${encodeURIComponent(error)}`);
            } else {
                navigate('/login');
            }
        };

        handleCallback();
    }, [searchParams, navigate, checkAuth]);

    return (
        <LoadingWrapper>
            <div className="spinner" />
            <p>Completing AuthN login...</p>
        </LoadingWrapper>
    );
};

const LoadingWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    gap: 1rem;

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #e2dee3;
        border-top: 4px solid #8a3dba;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    p {
        color: #4b0f70;
        font-size: 1.1rem;
        font-weight: 500;
    }
`;

export default AuthNCallback;
