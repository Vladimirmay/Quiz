import { Button } from "@mui/material";

interface ButtonRestartProps {
  onClick: () => void;
}

export default function ButtonRestart({ onClick }: ButtonRestartProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#3300FF",
        borderRadius: "10px",
        fontSize: "12px",
        padding: "8px 24px",
        textTransform: "none",
        fontWeight: 700,
      }}
    >
      Пройти еще раз
    </Button>
  );
}
