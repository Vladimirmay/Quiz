import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h4: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#3300FF",
          },
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
        },
      },
    },
  },
});
