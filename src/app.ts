import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import propertyRoutes from "./routes/property.routes";
import categoryRoutes from "./routes/category.routes";
import scheduleRoutes from "./routes/schedule.routes";
import { AppError } from "./errors/appErrors";
import "dotenv/config";

const app = express();
const PORT = process.env.DB_PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/properties", propertyRoutes);
app.use("/categories", categoryRoutes);
app.use("/schedule", scheduleRoutes);

//global errors
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
