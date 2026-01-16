import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box id="home">
        <Hero />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="experience">
        <Experience />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
}
