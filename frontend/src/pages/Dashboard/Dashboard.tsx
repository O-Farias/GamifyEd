import React from "react";
import { FaLevelUpAlt, FaStar, FaChartLine } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="w-full max-w-4xl">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <FaLevelUpAlt className="text-blue-500 mr-2" /> Nível Atual
          </h3>
          <p className="text-lg">Nível 5</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <FaStar className="text-yellow-500 mr-2" /> Pontos
          </h3>
          <p className="text-lg">1230 pontos</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <FaChartLine className="text-green-500 mr-2" /> Estatísticas
            Recentes
          </h3>
          <p className="text-lg">Últimos quizzes respondidos:</p>
          {/* Adicionar o histórico de quizzes respondidos */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
