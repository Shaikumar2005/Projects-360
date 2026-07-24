const express = require("express");
const cors = require("cors");
require("dotenv").config();

const paymentRoutes = require("./routes/payment");

const app = express();

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Check Environment Variables
// ===============================
console.log("=================================");
console.log("🚀 Starting Projects360 Backend");
console.log("PORT:", process.env.PORT || 5000);

if (!process.env.RAZORPAY_KEY_ID) {
    console.log("❌ RAZORPAY_KEY_ID NOT FOUND");
} else {
    console.log("✅ RAZORPAY_KEY_ID Loaded");
}

if (!process.env.RAZORPAY_KEY_SECRET) {
    console.log("❌ RAZORPAY_KEY_SECRET NOT FOUND");
} else {
    console.log("✅ RAZORPAY_KEY_SECRET Loaded");
}
console.log("=================================");

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Projects360 Razorpay Backend Running 🚀"
    });
});

// API Routes
app.use("/api", paymentRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server Started on http://localhost:${PORT}`);
});