import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
} from "@mui/material";
import { questions } from "./data/questions";
import { shuffleArray } from "./utils/shuffleArray";
import { QuizResults } from "./components/QuizResults";
import { QuizProgress } from "./components/QuizProgress";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray(questions));
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<{
    [key: number]: (typeof questions)[0]["answers"];
  }>({});

  useEffect(() => {
    const initialQuestions = shuffleArray(questions);
    setShuffledQuestions(initialQuestions);

    // Подготавливаем перемешанные ответы для каждого вопроса один раз при старте
    const initialShuffledAnswers = initialQuestions.reduce((acc, question) => {
      acc[question.id] = shuffleArray(question.answers);
      return acc;
    }, {} as { [key: number]: (typeof questions)[0]["answers"] });

    setShuffledAnswers(initialShuffledAnswers);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isAnswerSelected) return;

    const answerText = event.target.value;
    setIsAnswerSelected(true);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerText,
    }));

    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setIsAnswerSelected(false);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResults(false);
    const newQuestions = shuffleArray(questions);
    setShuffledQuestions(newQuestions);

    // Подготавливаем новые перемешанные ответы при рестарте
    const newShuffledAnswers = newQuestions.reduce((acc, question) => {
      acc[question.id] = shuffleArray(question.answers);
      return acc;
    }, {} as { [key: number]: (typeof questions)[0]["answers"] });

    setShuffledAnswers(newShuffledAnswers);
    setIsAnswerSelected(false);
  };

  if (showResults) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          <QuizResults
            questions={shuffledQuestions}
            userAnswers={userAnswers}
            onRestart={restartQuiz}
          />
        </Box>
      </Box>
    );
  }

  if (!currentQuestion || !shuffledAnswers[currentQuestion.id]) {
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto", width: "100%" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Тестирование
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            mt: 2,
            backgroundColor: "#F7F7F7",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {currentQuestion.text}
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup
              value={userAnswers[currentQuestion.id] || ""}
              onChange={handleAnswerSelect}
            >
              {shuffledAnswers[currentQuestion.id].map((answer, index) => (
                <FormControlLabel
                  key={index}
                  value={answer.text}
                  control={<Radio />}
                  label={answer.text}
                  disabled={isAnswerSelected}
                  sx={{
                    opacity: isAnswerSelected ? 0.7 : 1,
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>

        <QuizProgress
          current={currentQuestionIndex + 1}
          total={shuffledQuestions.length}
        />
      </Box>
    </Box>
  );
}

export default App;
