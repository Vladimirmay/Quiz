import { useMemo, useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import { questions } from "../data/questions";

export const useQuiz = () => {
  const shuffledData = useMemo(() => {
    const shuffled = shuffleArray(questions);
    return shuffled.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});

  const isLastQuestion = currentIndex === shuffledData.length - 1;
  const showResults = Object.keys(userAnswers).length === shuffledData.length;

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswers((prev) => ({
      ...prev,
      [shuffledData[currentIndex].id]: event.target.value,
    }));
    if (!isLastQuestion) {
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 1000);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers({});
  };

  return {
    currentIndex,
    shuffledData,
    userAnswers,
    handleAnswerSelect,
    restartQuiz,
    showResults,
  };
};
