import { Box, Typography, Button, Stack } from "@mui/material";
import profile from "../assets/Profile.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "90vh" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 0 },
        gap: { xs: 3, md: 0 },
      }}
    >
      {/* LEFT CONTENT */}
      <Stack spacing={3}>
        <Typography 
          variant="h3" 
          fontWeight={800}
          sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" } }}
        >
          Full Stack Developer
        </Typography>
        <Typography 
          variant="h5" 
          color="primary"
          sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" } }}
        >
          React & React Native Specialist
        </Typography>
        <Typography 
          color="gray"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, lineHeight: 1.6 }}
        >
          Building real-time, scalable applications used by 6,000+ users.
          Strong expertise in React, React Native, Redux, and Spring Boot.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button variant="contained" href="#projects" sx={{ textDecoration: "none", width: { xs: "100%", sm: "auto" } }}>View Projects</Button>
          <Button variant="outlined" href="#contact" sx={{ textDecoration: "none", width: { xs: "100%", sm: "auto" } }}>Contact Me</Button>
        </Stack>
      </Stack>

      {/* RIGHT GLOWING CIRCLE */}
      <Box
        sx={{
          position: "relative",
          width: { xs: 200, sm: 280, md: 400 },
          height: { xs: 200, sm: 280, md: 400 },
          mx: "auto",
        }}
      >
        {/* Rotating Tangled Wire Border */}
        <Box
          sx={{
            position: "absolute",
            inset: 5,
            borderRadius: "50%",
            background:
              "conic-gradient(from 0deg, #8b5cf6 0%, #3b82f6 25%, #ec4899 50%, #8b5cf6 100%)",
            animation: "spin 6s linear infinite",
            "@keyframes spin": {
              to: { transform: "rotate(360deg)" },
            },
            zIndex: 1,
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.3)",
          }}
        />

        {/* Inner Container with 10px Gap */}
        <Box
          sx={{
            position: "absolute",
            inset: 10,
            borderRadius: "50%",
            backgroundColor: "#000",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Static Image */}
          <Box
            component="img"
            src={profile}
            alt="profile"
            sx={{
              width: "calc(100% - 10px)",
              height: "calc(100% - 10px)",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      </Box>
  );
}
