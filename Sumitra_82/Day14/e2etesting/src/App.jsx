
import React, { useState, useRef } from 'react';

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    setError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
    setIsLoggedIn(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '90%',
        maxWidth: '400px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
      }} data-testid="login-container">
        
        {isLoggedIn ? (
          <div data-testid="welcome-message">
            <h2 style={{
              textAlign: 'center',
              color: '#333',
              marginBottom: '25px',
              fontSize: '24px'
            }}>Welcome!</h2>
            <p style={{ textAlign: 'center', marginBottom: '25px', color: '#666' }}>
              You are now logged in successfully.
            </p>
            <button 
              onClick={handleLogout}
              data-testid="logout-button"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 style={{
              textAlign: 'center',
              color: '#333',
              marginBottom: '25px',
              fontSize: '24px'
            }} data-testid="login-title">Login</h2>
            
            <form onSubmit={handleSubmit} data-testid="login-form">
              {error && (
                <div 
                  data-testid="error-message"
                  style={{
                    color: '#d32f2f',
                    backgroundColor: '#fdecea',
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '20px',
                    border: '1px solid #f5c6cb'
                  }}
                >
                  {error}
                </div>
              )}
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: '500',
                  color: '#555'
                }}>Email Address:</label>
                <input
                  type="email"
                  id="email"
                  data-testid="email-input"
                  ref={emailRef} // Uncontrolled component
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="test@example.com"
                />
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <label htmlFor="password" style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: '500',
                  color: '#555'
                }}>Password:</label>
                <input
                  type="password"
                  id="password"
                  data-testid="password-input"
                  ref={passwordRef} // Uncontrolled component
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your password"
                />
              </div>
              
              <button
                type="submit"
                data-testid="login-button"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Login
              </button>
            </form>
            
            <div style={{
              textAlign: 'center',
              marginTop: '20px',
              color: '#777',
              fontSize: '14px'
            }}>
              <p>Try: test@example.com / any password</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;