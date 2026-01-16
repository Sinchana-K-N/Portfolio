import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (itemId: string) => {
    if (location.pathname === "/") {
      // If already on home page, just scroll to section
      window.location.hash = itemId;
    } else {
      // If on different page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        window.location.hash = itemId;
      }, 100);
    }
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700} onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
          Sinchana
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{ color: "white", textTransform: "none", textDecoration: "none", cursor: "pointer" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Button variant="contained" onClick={() => navigate("/hire-me")}>Hire Me</Button>
      </Toolbar>
    </AppBar>
  );
}
