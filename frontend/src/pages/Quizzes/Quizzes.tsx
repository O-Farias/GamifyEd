import React from "react";
import QuizCategoryCard from "../../components/QuizCategoryCard";

const categories = [
  {
    title: "Continentes",
    image: "/public/continentes.jpg",
    description: "Teste seus conhecimentos sobre os continentes do mundo.",
    link: "/quizzes/continentes",
  },
  {
    title: "Países",
    image: "/public/paises.jpg",
    description: "Você conhece todos os países? Faça o quiz e descubra!",
    link: "/quizzes/paises",
  },
  {
    title: "Capitais",
    image: "/public/capitais.jpg",
    description: "Desafie-se a lembrar as capitais dos países.",
    link: "/quizzes/capitais",
  },
];

const Quizzes: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Categorias de Quiz
      </h2>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <QuizCategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
