import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulação de envio de e-mail de recuperação de senha
    if (email) {
      alert("E-mail de recuperação de senha enviado!");
      // adicionar a lógica de recuperação de senha futura
    } else {
      alert("Por favor, preencha o campo de e-mail.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Esqueceu sua senha?
        </h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="mt-2">
            Lembrou sua senha?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
