import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: { xs: 3, md: 4 }, textAlign: "center", color: "gray", px: { xs: 2, sm: 4 } }}>
      <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
        © {new Date().getFullYear()} Sinchana | Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}
