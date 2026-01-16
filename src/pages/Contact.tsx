import { Box, Typography, Button, Stack, Link } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {

  const contactLinks = [
    {
      icon: <EmailIcon sx={{ fontSize: "2.5rem", color: "#3b82f6" }} />,
      label: "Email",
      value: "sinchanaknsmg@gmail.com",
      href: "mailto:sinchanaknsmg@gmail.com",
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: "2.5rem", color: "#0077b5" }} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sinchana",
      href: "https://www.linkedin.com/in/sinchana-kn",
    },
  ];

  return (
    <Box sx={{ py: 12, textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={8} maxWidth={600} mx="auto">
          Feel free to reach out to me through any of these platforms. I'd love to hear from you!
        </Typography>
      </motion.div>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        {contactLinks.map((contact, index) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box sx={{ mb: 1.5 }}>
                {contact.icon}
              </Box>
              <Typography variant="h6" fontWeight={700} color="white">
                {contact.label}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {contact.value}
              </Typography>
            </Link>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
