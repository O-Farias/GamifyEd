import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-8">
        Bem-vindo ao App de Aprendizado Gamificado
      </h1>
      <p className="mt-4 text-lg">
        Torne o aprendizado mais envolvente e eficaz com nossos quizzes e
        desafios interativos.
      </p>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={handleButtonClick}
      >
        Comece Agora
      </button>
    </div>
  );
};

export default LandingPage;
