const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// DATA DUMMY (KHUSUS WEB DEVELOPER)
const portfolioData = [
  {
    id: 1,
    title: "SaaS Dashboard",
    category: "Full Stack",
    img: "https://via.placeholder.com/600x400/1a1a1a/e11d48?text=Dashboard+App",
  },
  {
    id: 2,
    title: "E-Commerce API",
    category: "Backend",
    img: "https://via.placeholder.com/600x400/1a1a1a/e11d48?text=REST+API",
  },
  {
    id: 3,
    title: "Crypto Tracker",
    category: "React Native",
    img: "https://via.placeholder.com/600x400/1a1a1a/e11d48?text=Mobile+App",
  },
  {
    id: 4,
    title: "Company Profile",
    category: "Frontend",
    img: "https://via.placeholder.com/600x400/1a1a1a/e11d48?text=Landing+Page",
  },
  {
    id: 5,
    title: "AI Image Gen",
    category: "Python / AI",
    img: "https://via.placeholder.com/600x400/1a1a1a/e11d48?text=AI+Tool",
  },
  {
    id: 6,
    title: "Inventory System",
    category: "System",
    img: "https://via.placeholder.com/600x400/1a1a1a/e11d48?text=Inventory+App",
  },
];

// Routes
app.get("/api/portfolio", (req, res) => {
  res.json(portfolioData);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`[Pesan Masuk] Dari: ${name} (${email}) \nPesan: ${message}`);
  res.json({
    status: "success",
    message: "Terima kasih! Pesan Anda sudah saya terima.",
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Developer berjalan di http://localhost:${PORT}`);
});
