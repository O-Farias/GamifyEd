import React, { useState } from "react";

const Capitais: React.FC = () => {
  const [difficulty, setDifficulty] = useState("Iniciante");

  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Quiz sobre Capitais
      </h2>
      <p className="text-center mb-4">
        Aqui você pode selecionar os quizzes sobre capitais.
      </p>
      <div className="flex justify-center mb-6">
        <label htmlFor="difficulty" className="mr-2">
          Selecione o nível de dificuldade:
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
    </div>
  );
};

export default Capitais;
