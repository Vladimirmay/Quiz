import { LinearProgress, Typography, Box } from "@mui/material";

interface QuizProgressProps {
  current: number;
  total: number;
}

export const QuizProgress = ({ current, total }: QuizProgressProps) => {
  const progress = (current / total) * 100;

  return (
    <Box className="quiz-progress" sx={{ width: "100%", mt: 4, position: "relative" }}>
      {/* Числовые метки */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          0
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {total}
        </Typography>
      </Box>

      {/* Текущий номер вопроса с анимацией */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          left: `${progress}%`,
          transform: "translateX(-50%)",
          transition: "left 0.3s ease-out",
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          {current}
        </Typography>
      </Box>

      {/* Прогрессбар */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3300FF",
            transition: "transform 0.3s ease-out",
          },
        }}
      />
    </Box>
  );
};
