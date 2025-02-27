import { Box, Typography } from "@mui/material";
import { QuizResults } from "./components/QuizResults";
import { QuizProgress } from "./components/QuizProgress";
import { useQuiz } from "./hooks/useQuiz";
import QuizScreen from "./components/QuizScreen";

export default function App() {
  const {
    currentIndex,
    shuffledData,
    userAnswers,
    handleAnswerSelect,
    restartQuiz,
    showResults,
  } = useQuiz();

  if (showResults) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          <QuizResults
            questions={shuffledData}
            userAnswers={userAnswers}
            onRestart={restartQuiz}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", p: 4, display: "flex", flexDirection: "column" }}>
      <Box sx={{ maxWidth: 800, mx: "auto", width: "100%" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Тестирование
        </Typography>
        <QuizScreen
          question={shuffledData[currentIndex]}
          userAnswer={userAnswers[shuffledData[currentIndex].id]}
          onAnswerSelect={handleAnswerSelect}
        />
        <QuizProgress current={currentIndex + 1} total={shuffledData.length} />
      </Box>
    </Box>
  );
}
