import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 4, md: 6 }, maxWidth: "1200px", mx: "auto" }}>
      <Typography 
        variant="h4" 
        fontWeight={700} 
        mb={3}
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" }, textAlign: { xs: "center", md: "left" } }}
      >
        About Me
      </Typography>

      <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, lineHeight: 1.8 }}>
        I am a Full Stack Developer with over 2 years of professional experience
        specializing in React, React Native, and TypeScript. I have worked on
        real-time applications actively used by thousands of users and have
        experience across the complete software development life cycle.
        <br /><br />
        I have collaborated with clients, handled production deployments, and
        conducted technical training sessions for new hires on Spring Boot.
      </Typography>
    </Box>
  );
}
