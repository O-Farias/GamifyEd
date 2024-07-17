import React from "react";
import { useNavigate } from "react-router-dom";

interface QuizCategoryCardProps {
  title: string;
  image: string;
  description: string;
  link: string; // Adiciona uma propriedade de link
}

const QuizCategoryCard: React.FC<QuizCategoryCardProps> = ({
  title,
  image,
  description,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default QuizCategoryCard;
