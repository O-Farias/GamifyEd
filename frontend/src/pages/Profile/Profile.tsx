import React, { useState } from "react";

const Profile: React.FC = () => {
  const [username, setUsername] = useState("SeuNomeDeUsuário");
  const [email, setEmail] = useState("seuemail@dominio.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // adicionar a lógica para atualizar o perfil
    console.log("Perfil atualizado:", { username, email, password });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Perfil do Usuário
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Nome de usuário
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Nova senha (deixe em branco para manter a atual)
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Atualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
