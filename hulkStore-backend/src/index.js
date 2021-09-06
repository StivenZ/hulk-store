import express from "express";
import cors from "cors";
import config from "./config.js";
import connectDb from "./database/db.js";
import itemRoutes from "./routes/item.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());
const { appl } = config;

app.use(express.json());
connectDb();

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/user", userRoutes);

app.listen(appl.port, () => {
  console.log(`Server up and running on http://localhost:${appl.port}`);
});
