import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8b5cf6", // neon purple
    },
    background: {
      default: "#0b0b0f",
      paper: "#111118",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
