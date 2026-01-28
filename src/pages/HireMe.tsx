import { Box, Typography, Grid, TextField, Button, Paper, CircularProgress } from "@mui/material";
import { motion, easeInOut } from "framer-motion";
import hinataImage from "../assets/hinata-hyuga.jpg";
import { useState, useEffect, useRef } from "react";
import { askHireMeAI } from "../redux/actions/HireMe";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

interface ChatMessage {
  id: string;
  question: string;
  answer: string;
  timestamp: number;
}

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
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const SESSION_STORAGE_KEY = "hireMeChat";

  // Load messages from session storage on mount
  useEffect(() => {
    const savedMessages = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("Error loading chat history:", e);
      }
    }
  }, []);

  // Save messages to session storage whenever they change
  useEffect(() => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userQuestion = question;
    setQuestion("");
    setLoading(true);

    try {
      const answer = await askHireMeAI(userQuestion);
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        question: userQuestion,
        answer: answer,
        timestamp: Date.now(),
      };
      setMessages([...messages, newMessage]);
    } catch (error) {
      console.error("Error fetching answer:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

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
        spacing={{ xs: 4, md: 12 }}
        alignItems="flex-start"
        maxWidth="1100px"
        mx="auto"
        px={{ xs: 2, sm: 4, md: 0 }}
      >
        {/* Content */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 2, md: 1 } }}>
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
        <Grid size={{ xs: 12, md: 7 }} position="relative" sx={{ order: { xs: 1, md: 2 }, display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
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
        </Grid>
      </Grid>

      {/* Chat Section */}
      <Paper
        elevation={6}
        sx={{
          mt: 8,
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          background:
            "linear-gradient(135deg, rgba(124,108,255,0.12), rgba(0,0,0,0.6))",
          backdropFilter: "blur(8px)",
          maxWidth: "900px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          minHeight: { xs: "500px", sm: "600px" },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Typography 
            variant="h6" 
            fontWeight={600}
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            💬 Ask My AI Assistant
          </Typography>
          {messages.length > 0 && (
            <Button
              size="small"
              startIcon={<DeleteIcon />}
              onClick={handleClearChat}
              sx={{ color: "error.main" }}
            >
              Clear Chat
            </Button>
          )}
        </Box>

        {/* Messages Container */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            mb: 2,
            pr: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(124,108,255,0.1)",
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(124,108,255,0.3)",
              borderRadius: "3px",
              "&:hover": {
                background: "rgba(124,108,255,0.5)",
              },
            },
          }}
        >
          {messages.length === 0 && !loading && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "text.secondary",
              }}
            >
              <Typography textAlign="center">
                Start a conversation with my AI assistant! <br /> Ask me about
                my experience, projects, or skills.
              </Typography>
            </Box>
          )}

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* User Question */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mb: 1,
                }}
              >
                <Paper
                  sx={{
                    maxWidth: "75%",
                    p: 2,
                    background: "rgba(124,108,255,0.25)",
                    border: "1px solid rgba(124,108,255,0.4)",
                    borderRadius: "12px",
                    borderBottomRightRadius: "4px",
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    {msg.question}
                  </Typography>
                </Paper>
              </Box>

              {/* AI Answer */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <Paper
                  sx={{
                    maxWidth: "75%",
                    p: 2,
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(124,108,255,0.2)",
                    borderRadius: "12px",
                    borderBottomLeftRadius: "4px",
                  }}
                >
                  <Typography variant="body2" color="text.secondary" whiteSpace="pre-line" lineHeight={1.6}>
                    {msg.answer}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}

          {loading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CircularProgress size={20} sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">
                AI is thinking...
              </Typography>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </Box>

        {/* Input Area */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end", flexDirection: { xs: "column", sm: "row" } }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            minRows={2}
            placeholder="Ask about my experience, projects, or skills..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "rgba(0,0,0,0.3)",
              },
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={loading || !question.trim()}
            onClick={handleAsk}
            endIcon={<SendIcon />}
            sx={{ height: { xs: "auto", sm: "56px" }, width: { xs: "100%", sm: "auto" }, py: { xs: 1.5, sm: 0 } }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default WhyHireMe;
