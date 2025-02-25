import { Box, Typography, Paper } from "@mui/material";
import { Question } from "../data/questions";
import ButtonRestart from "./ButtonRestart";

interface QuizResultsProps {
  questions: Question[];
  userAnswers: { [key: number]: string };
  onRestart: () => void;
}

export const QuizResults = ({ questions, userAnswers, onRestart }: QuizResultsProps) => {
  const correctAnswers = questions.filter(
    (q) => userAnswers[q.id] === q.answers.find((a) => a.isCorrect)?.text
  ).length;

  const allWrong = correctAnswers === 0;
  const allCorrect = correctAnswers === questions.length;
  const moreHalfCorrect = correctAnswers >= 5;
  const lessHalfCorrect = correctAnswers <= 5;

  return (
    <Box className="quiz-results">
      {allWrong && (
        <>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
            Упс :(
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Вы неправильно ответили на все вопросы. Нужно подучить теорию.
          </Typography>
        </>
      )}

      {allCorrect && (
        <>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
            Поздравляем!
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в
            IT.
          </Typography>
        </>
      )}

      {moreHalfCorrect && (
        <>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
            Хороший результат!
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Вы ответили правильно на {correctAnswers} вопросов. Так держать!
          </Typography>
        </>
      )}

      {lessHalfCorrect && (
        <>
          <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
            Не плохо!
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Вы ответили правильно на {correctAnswers} вопросов. Так держать!
          </Typography>
        </>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {questions.map((question) => {
          const userAnswer = userAnswers[question.id];
          const correctAnswer = question.answers.find((a) => a.isCorrect)?.text;
          const isCorrect = userAnswer === correctAnswer;

          return (
            <Paper
              key={question.id}
              elevation={0}
              sx={{
                p: "40px",
                backgroundColor: isCorrect ? "#E5F5E1" : "#FFE0E0",
                borderRadius: "20px",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {question.text}
              </Typography>
              <Typography variant="body2">{userAnswer}</Typography>
            </Paper>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <ButtonRestart onClick={onRestart} />
      </Box>
    </Box>
  );
};
