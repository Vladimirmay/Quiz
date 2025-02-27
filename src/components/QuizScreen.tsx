import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
} from "@mui/material";

interface QuizScreenProps {
  question: {
    text: string;
    answers: { text: string }[];
  };
  userAnswer: string;
  onAnswerSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuizScreen = ({ question, userAnswer, onAnswerSelect }: QuizScreenProps) => {
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [question]);

  return (
    <Paper
      ref={questionRef}
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
};

export default QuizScreen;
