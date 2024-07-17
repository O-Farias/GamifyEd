import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulação de validação de login
    if (email && password) {
      // adicionar a lógica de autenticação futura
      navigate("/dashboard"); // Redireciona para o Dashboard
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              E-mail
            </label>
            <div className="flex items-center bg-gray-700 p-2 rounded">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="flex items-center bg-gray-700 p-2 rounded">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </p>
          <p className="mt-2">
            Ainda não tem uma conta?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
