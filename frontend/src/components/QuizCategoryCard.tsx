import React from "react";

interface QuizCategoryCardProps {
  title: string;
  image: string;
  description: string;
}

const QuizCategoryCard: React.FC<QuizCategoryCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default QuizCategoryCard;
