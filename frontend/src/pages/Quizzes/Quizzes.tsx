import React, { useState } from "react";

const Quizzes: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const questions = [
    {
      question: "Qual é a capital da França?",
      options: ["Paris", "Londres", "Roma", "Berlim"],
      correctOption: 0,
    },
    // Adicionar mais perguntas aqui
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOption === questions[currentQuestion].correctOption) {
      setFeedback("Resposta correta!");
    } else {
      setFeedback("Resposta incorreta.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Responda o Quiz</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              {questions[currentQuestion].question}
            </h3>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  name="option"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Enviar
          </button>
        </form>
        {feedback && <p className="mt-4 text-center">{feedback}</p>}
      </div>
    </div>
  );
};

export default Quizzes;
