import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import hpeSupportApp from "../assets/hpe-support-app.jpg";
import hpeLeadersApp from "../assets/hpe-leaders-app.jpg";

/**
 * Projects data (kept inside this file as requested)
 * Images:
 * - Mobile apps → App Store screenshots
 * - Web apps → Dashboard / mockup images
 */
const projects = [
  {
    title: "HPE Support Case Visibility App",
    type: "Mobile Application",
    description:
      "A comprehensive React Native application designed for HPE support professionals to manage, track, and monitor customer support cases across PAN and HCS platforms with real-time visibility and AI-powered insights.",
    features: [
      "Search, view, and track cases with SLA and severity details",
      "Watchlist with real-time push notifications",
      "AI Nuggets for sentiment analysis and urgency assessment",
      "CIMR integration for incident creation and tracking",
      "Executive dashboards for team-level visibility",
      "Offline support with graceful network handling",
    ],
    techStack: [
      "React Native",
      "Redux Toolkit",
      "Firebase",
      "OKTA",
      "Detox",
      "Jenkins",
    ],
    image: hpeSupportApp, // App Store screenshot
    appStoreLink: "https://apps.apple.com/us/app/hpe-support-case-visibility/id6736603845", // Update with actual link
  },
  {
    title: "Trail – Asset Management System",
    type: "Web Application",
    description:
      "A full-stack web application for invoice capture, asset tracking, and master data management with secure authentication and role-based access control.",
    features: [
      "Invoice capture and asset lifecycle management",
      "Advanced search and filtering capabilities",
      "Secure authentication with role-based access",
      "Scalable backend services with Spring Boot",
    ],
    techStack: ["React", "Redux", "Spring Boot", "PostgreSQL"],
    image: "/assets/trail-dashboard.svg", // Dashboard / web mockup
  },
  {
    title: "HPE Ops App",
    type: "Mobile Application",
    description:
      "A mobile application delivering business-critical metrics through interactive visualizations and global mapping for enterprise leadership teams.",
    features: [
      "Interactive charts and data visualization",
      "Global mapping insights",
      "Real-time business metrics",
      "Performance-optimized mobile experience",
    ],
    techStack: ["React Native", "Data Visualization"],
    image: hpeLeadersApp,
    appStoreLink: "https://apps.apple.com/us/app/hpe-ops-view/id6462699142", // Update with actual link
  },
];

export default function Projects() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 2 } }}>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary"
        textAlign="center"
        mb={8}
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" } }}
      >
        Projects
      </Typography>

      {projects.map((project, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            alignItems="center"
            key={project.title}
            sx={{ mb: { xs: 6, md: 10 } }}
          >
            {/* Image Section */}
            <Grid size={{ xs: 12, md: 6 }} order={isImageLeft ? 1 : 2}>
              <motion.img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  borderRadius: "16px",
                }}
                initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </Grid>

            {/* Content Section */}
            <Grid size={{ xs: 12, md: 6 }} order={isImageLeft ? 2 : 1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="overline"
                  color="text.secondary"
                  gutterBottom
                >
                  {project.type}
                </Typography>

                <Typography variant="h5" fontWeight={600} mb={2}>
                  {project.title}
                </Typography>

                <Typography color="text.secondary" mb={3}>
                  {project.description}
                </Typography>

                <Box mb={3}>
                  {project.features.map((feature) => (
                    <Typography
                      key={feature}
                      color="text.secondary"
                      sx={{ mb: 0.8 }}
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Box>

                <Box mb={3}>
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        mr: 1,
                        mb: 1,
                        bgcolor: "primary.main",
                        color: "white",
                      }}
                    />
                  ))}
                </Box>

                {project.appStoreLink && (
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => window.open(project.appStoreLink, "_blank")}
                  >
                    View Project
                  </Button>
                )}
              </motion.div>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
}
