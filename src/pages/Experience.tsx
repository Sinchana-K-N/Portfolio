import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Mphasis",
    duration: "Present",
    points: [
      "Working as a Full Stack Developer with primary focus on frontend development using React and React Native, and backend integration using Spring Boot.",
      "Actively involved in the complete Agile Software Development Life Cycle (SDLC) including requirement analysis, sprint planning, development, testing, deployment, and production support.",
      "Collaborated with cross-functional teams including product owners, business analysts, QA, and DevOps to deliver scalable and user-friendly enterprise applications.",
      "Developed and enhanced mobile and web applications with strong emphasis on performance optimization, code quality, and user experience.",
      "Handled production deployments, CI/CD pipelines using Jenkins, bug fixes, and change requests ensuring application stability and minimal downtime.",
    ],
  },
  {
    role: "Junior Associate (Internship)",
    company: "Mphasis",
    duration: "Intern → Junior Associate",
    points: [
      "Joined Mphasis as an Intern and transitioned into the Junior Associate role by consistently delivering high-quality features and demonstrating technical ownership.",
      "Worked in Agile Scrum teams, actively participating in daily stand-ups, sprint planning, sprint reviews, and retrospectives.",
      "Implemented frontend features using React and React Native while consuming REST APIs and managing application state using Redux.",
      "Collaborated closely with senior developers to fix bugs, improve UI usability, and enhance application performance.",
      "Gained hands-on experience in enterprise application development, code reviews, testing, and deployment processes.",
    ],
  },
];

export default function Experience() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 2 } }}>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary"
        textAlign="center"
        mb={6}
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" } }}
      >
        Experience
      </Typography>

      <Box
        sx={{
          position: "relative",
          pl: { xs: 2, md: 4 },
          borderLeft: "2px solid rgba(124,108,255,0.4)",
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{ mb: 5, position: "relative" }}>
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: "-11px",
                  top: "20px",
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                }}
              />

              <Card
                sx={{
                  bgcolor: "#111118",
                  color: "white",
                  borderRadius: 4,
                  ml: 2,
                  "&:hover": {
                    boxShadow: "0 0 30px rgba(124,108,255,0.4)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600} color="primary">
                    {exp.role}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    mb={2}
                  >
                    {exp.company} • {exp.duration}
                  </Typography>

                  <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
                    {exp.points.map((point) => (
                      <li key={point} style={{ color: "#b0b0c3" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}
