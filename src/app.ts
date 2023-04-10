import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
