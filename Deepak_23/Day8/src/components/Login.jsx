import React from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, login } = useAuth();

  if (user) return null;

  return (
    <div className="flex justify-center mt-24">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-80
                      hover:scale-105 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Welcome Back
        </h2>

        <button
          onClick={() => login("Deepak")}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600
                     py-2 rounded-lg font-semibold hover:opacity-90
                     active:scale-95 transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
