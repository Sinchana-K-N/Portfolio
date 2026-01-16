import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        About Me
      </Typography>

      <Typography>
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
