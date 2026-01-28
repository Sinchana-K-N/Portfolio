export const askHireMeAI = async (question: string): Promise<string> => {
  try {
    const res = await fetch(
      "https://ai-portfolio-backend-d1in.onrender.com/api/portfolio/copilot",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      }
    );

    if (!res.ok) {
      console.error("API Error - Status:", res.status, res.statusText);
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log("API Response:", data);
    return data.answer;
  } catch (error) {
    console.error("Error calling AI API:", error);
    // fallback for portfolio demo
    return `I am a Full Stack Developer with strong experience in React, TypeScript, and Spring Boot.
I’ve worked on real-world applications used by thousands of users and I take full ownership of features from UI to backend and deployment.`;
  }
};
