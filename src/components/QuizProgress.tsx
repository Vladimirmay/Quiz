import { LinearProgress, Typography, Box } from "@mui/material";

interface QuizProgressProps {
  current: number;
  total: number;
}

export const QuizProgress = ({ current, total }: QuizProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <Box className="quiz-progress" sx={{ width: "100%", mt: 4 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3300FF",
          },
        }}
      />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Вопрос {current} из {total}
      </Typography>
    </Box>
  );
};
