import React, { useState } from "react";

const Admin: React.FC = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctOption: 0 },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctOption: 0 },
    ]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //  adicionar a lógica para salvar o quiz
    console.log("Quiz criado:", { quizTitle, questions });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Administração de Quizzes
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="quizTitle"
            >
              Título do Quiz
            </label>
            <input
              type="text"
              id="quizTitle"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              required
            />
          </div>
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor={`question-${index}`}
              >
                Pergunta {index + 1}
              </label>
              <input
                type="text"
                id={`question-${index}`}
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                value={q.question}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].question = e.target.value;
                  setQuestions(newQuestions);
                }}
                required
              />
              {q.options.map((option, optIndex) => (
                <input
                  key={optIndex}
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  value={option}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].options[optIndex] = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  placeholder={`Opção ${optIndex + 1}`}
                  required
                />
              ))}
              <label
                className="block text-sm font-medium mb-2"
                htmlFor={`correctOption-${index}`}
              >
                Opção Correta
              </label>
              <select
                id={`correctOption-${index}`}
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={q.correctOption}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].correctOption = parseInt(e.target.value);
                  setQuestions(newQuestions);
                }}
                required
              >
                {q.options.map((_, optIndex) => (
                  <option key={optIndex} value={optIndex}>
                    Opção {optIndex + 1}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button
            type="button"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors mb-4"
            onClick={handleAddQuestion}
          >
            Adicionar Pergunta
          </button>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
          >
            Salvar Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
