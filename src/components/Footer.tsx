import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: "center", color: "gray" }}>
      <Typography>
        © {new Date().getFullYear()} Sinchana | Built with React & MUI
      </Typography>
    </Box>
  );
}
