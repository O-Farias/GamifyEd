import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaListUl,
  FaChartBar,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //  adicionar a lógica de logout
    console.log("Usuário deslogado");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl flex items-center">
          <Link to="/">Aprendizado Gamificado</Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link
            to="/dashboard"
            className="text-white hover:text-gray-400 flex items-center"
          >
            <FaChartBar className="mr-1" />
            Dashboard
          </Link>
          <Link
            to="/quizzes"
            className="text-white hover:text-gray-400 flex items-center"
          >
            <FaListUl className="mr-1" />
            Quizzes
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-gray-400 flex items-center"
          >
            <FaUser className="mr-1" />
            Perfil
          </Link>
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-400 flex items-center"
          >
            <FaSignOutAlt className="mr-1" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
