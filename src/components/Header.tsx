import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (itemId: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.location.hash = itemId;
    } else {
      navigate("/");
      setTimeout(() => {
        window.location.hash = itemId;
      }, 100);
    }
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4 } }}>
        <Typography 
          variant="h6" 
          fontWeight={700} 
          onClick={() => navigate("/")} 
          sx={{ cursor: "pointer", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          Sinchana K N
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{ color: "white", textTransform: "none", textDecoration: "none", cursor: "pointer", fontSize: "0.9rem" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button 
            variant="contained" 
            onClick={() => navigate("/hire-me")}
            sx={{ display: { xs: "none", sm: "block" }, fontSize: "0.85rem", px: 2 }}
          >
            Hire Me
          </Button>

          {/* Mobile Menu Button */}
          <IconButton 
            sx={{ display: { md: "none" }, color: "white" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ "& .MuiDrawer-paper": { bgcolor: "rgba(0,0,0,0.95)", width: "80%", maxWidth: 300 } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton 
                onClick={() => handleNavClick(item.id)}
                sx={{ color: "white", py: 1.5 }}
              >
                {item.label}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => { navigate("/hire-me"); setMobileOpen(false); }}
              sx={{ color: "primary.main", py: 1.5, fontWeight: 600 }}
            >
              Hire Me
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
