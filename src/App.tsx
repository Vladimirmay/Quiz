import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
} from "@mui/material";
import { QuizResults } from "./components/QuizResults";
import { QuizProgress } from "./components/QuizProgress";
import { useQuiz } from "./hooks/useQuiz";

interface QuizScreenProps {
  question: {
    text: string;
    answers: { text: string }[];
  };
  userAnswer: string;
  onAnswerSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuizScreen = ({ question, userAnswer, onAnswerSelect }: QuizScreenProps) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      mt: 2,
      height: "528px",
      backgroundColor: "#F7F7F7",
      borderRadius: "20px",
    }}
  >
    <Typography variant="h6" gutterBottom>
      {question.text}
    </Typography>
    <FormControl component="fieldset">
      <RadioGroup value={userAnswer || ""} onChange={onAnswerSelect}>
        {question.answers.map((answer: { text: string }, index: number) => (
          <FormControlLabel
            key={index}
            value={answer.text}
            control={<Radio />}
            label={answer.text}
            sx={{ gap: 1 }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  </Paper>
);

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
