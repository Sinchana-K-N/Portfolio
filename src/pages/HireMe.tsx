import { Box, Typography, Grid } from "@mui/material";
import { motion, easeInOut } from "framer-motion";
import hinataImage from "../assets/hinata-hyuga.jpg";

const floatingAnimation = {
  animate: {
    y: [0, 10, 0],
  },
  transition: {
    duration: 3,
    repeat: 0,
    ease: easeInOut,
  },
};

const WhyHireMe = () => {
  return (
    <Box sx={{ py: 8, position: "relative" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary"
        textAlign="center"
        mb={10}
      >
        Why Hire Me?
      </Typography>

      <Grid
        container
        spacing={12}
        alignItems="center"
        maxWidth="1100px"
        mx="auto"
      >
        {/* Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              lineHeight={1.9}
            >
              I am a Full Stack Developer with strong frontend expertise and
              hands-on experience building enterprise-grade applications at
              Mphasis. I began my career as a Junior Associate Intern and
              currently work as an Associate Software Engineer, contributing to
              real-world products used by global users.
              <br />
              <br />
              I have worked extensively in Agile environments, actively
              participating in requirement discussions, sprint planning,
              development, testing, deployment, and production support. I take
              ownership of features end-to-end and ensure timely, stable
              delivery.
              <br />
              <br />
              My core strength lies in building scalable and user-friendly
              interfaces using React, React Native, and TypeScript, along with
              solid backend experience using Spring Boot, REST APIs, and
              databases. This enables me to collaborate effectively across
              teams and deliver well-integrated solutions.
              <br />
              <br />
              I focus on writing clean, maintainable code and delivering
              reliable, performance-oriented applications that improve both
              user experience and business efficiency.
            </Typography>
          </motion.div>
        </Grid>

        {/* Anime Character */}
        <Grid size={{ xs: 12, md: 5 }} position="relative">
          <motion.img
            src={hinataImage}
            alt="Hinata Hyuga"
            style={{
              width: "100%",
              maxWidth: 320,
              borderRadius: "16px",
              filter: "drop-shadow(0 0 20px rgba(124,108,255,0.35))",
            }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            {...floatingAnimation}
          />

          {/* Glow Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyHireMe;
