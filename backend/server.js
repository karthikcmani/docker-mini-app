const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Retry logic for MongoDB connection
const connectWithRetry = () => {
  mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 5000, // waits 5s before timing out
  })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => {
      console.error("❌ MongoDB connection failed, retrying in 5 seconds...", err.message);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// Root route
app.get("/", (req, res) => {
  res.send("✅ Backend is live and running on Render!");
});

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
