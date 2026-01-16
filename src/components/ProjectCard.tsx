import { Card, CardContent, CardMedia, Typography, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  direction?: "left" | "right"; // Add direction prop
}

const ProjectCard = ({ title, description, techStack, image, direction = "left" }: ProjectCardProps) => {
  const slideDistance = 100; // pixels to slide from

  return (
    <motion.div
      initial={{ x: direction === "left" ? -slideDistance : slideDistance, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(124,108,255,0.5)" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card
        sx={{
          bgcolor: "#111118",
          color: "white",
          height: "100%",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {image && (
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{ objectFit: "cover" }}
          />
        )}
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  fontWeight: 500,
                  mb: 1,
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
