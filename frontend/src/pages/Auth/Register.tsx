import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulação de validação de registro
    if (username && email && password) {
      // adicionar a lógica de registro futura
      navigate("/login"); // Redireciona para o login após registro
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Registrar</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Nome de usuário
            </label>
            <div className="flex items-center bg-gray-700 p-2 rounded">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                id="username"
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Seu nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              E-mail
            </label>
            <div className="flex items-center bg-gray-700 p-2 rounded">
              <FaEnvelope className="text-gray-400 mr-2" />
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
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="mt-2">
            Já tem uma conta?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
