import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";

const skillStacks = [
  {
    title: "Mobile",
    icon: <PhoneIphoneIcon fontSize="large" />,
    skills: ["React Native"],
  },
  {
    title: "Web",
    icon: <CodeIcon fontSize="large" />,
    skills: ["React", "JavaScript", "TypeScript", "Redux"],
  },
  {
    title: "Backend",
    icon: <CodeIcon fontSize="large" />,
    skills: ["Spring Boot, JAVA"],
  },
  {
    title: "Database",
    icon: <StorageIcon fontSize="large" />,
    skills: ["PostgreSQL"],
  },
  {
    title: "Auth & Platform",
    icon: <SecurityIcon fontSize="large" />,
    skills: ["OKTA", "Firebase"],
  },
  {
    title: "Testing & CI/CD",
    icon: <BuildIcon fontSize="large" />,
    skills: ["Jest", "Jenkins"],
  },
];

export default function Skills() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 2 } }}>
      {/* Section Header */}
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary"
        textAlign="center"
        mb={1}
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" } }}
      >
        Stacks I Work With
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        mb={6}
        sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" }, px: { xs: 1, sm: 0 } }}
      >
        Technologies I have shipped and worked with in enterprise-grade applications
      </Typography>

      {/* Skill Cards */}
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {skillStacks.map((stack, index) => (
          <Grid size ={{ xs: 12, sm: 6, md: 4 }} key={stack.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  bgcolor: "#111118",
                  color: "white",
                  borderRadius: 4,
                  height: "100%",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 0 25px rgba(124,108,255,0.4)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <CardContent>
                  <Box mb={2} color="primary.main">
                    {stack.icon}
                  </Box>

                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {stack.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {stack.skills.join(" • ")}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
