// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/landing');
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  const handleEmailPasswordAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/landing');
    } catch (error) {
      console.error("Error with email/password authentication: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleEmailPasswordAuth} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-2 rounded-md mt-4">
          Sign in with Google
        </button>
        <button onClick={() => setIsLogin(!isLogin)} className="w-full bg-gray-500 text-white py-2 rounded-md mt-4">
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
