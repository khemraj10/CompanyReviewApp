import express from "express";
import cors from "cors";

import companyRoutes from "./routes/company.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.use("/api/auth", authRoutes);
app.use("api/companies", companyRoutes);
app.use("api/reviews", reviewRoutes);

app.get("/health-check", (req, res) => {
  res.json({ message: "Health Check" });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from the API" });
});

export default app;
