import { useState, useEffect } from "react";
import type { Question } from "../models/Question";
import { getQuestions } from "../services/questionApi";

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length - 1) {
      setQuizCompleted(true);
    }
    
  }, [currentQuestionIndex]);
  

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      if (!data || data.length === 0) throw new Error("❌ Error: No se recibieron preguntas.");
      setQuestions(data);
    } catch (error) {
      console.error("⚠ Error al obtener preguntas:", error);
    }
  };

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      console.log("✅ Activando `quizCompleted = true` en 500ms...");
      setTimeout(() => {
        setQuizCompleted(true);
      }, 500);
    }
  };

  const handleStartQuiz = async () => {
    await fetchQuestions();
    setQuizStarted(true);
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  if (!quizStarted) {
    return (
      <div className="p-4 text-center">
        <h2>Welcome to the Tech Quiz!</h2>
        <button className="btn btn-primary" onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="card p-4 text-center">
        <h2>Quiz Completed</h2>
        <div className="alert alert-success">Your score: {score}/{questions.length}</div>
        <button className="btn btn-primary" onClick={handleStartQuiz}>Take New Quiz</button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="card p-4">
      <h2>{currentQuestion.question}</h2>
      <div className="mt-3">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <button className="btn btn-primary" onClick={() => handleAnswerClick(answer.isCorrect)}>
              {index + 1}
            </button>
            <div className="alert alert-secondary mb-0 ms-2 flex-grow-1">{answer.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
