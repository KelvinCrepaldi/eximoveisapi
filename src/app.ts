import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.routes";
import propertyRoutes from "./routes/property.routes";
import { AppError } from "./errors/appErrors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/properties", propertyRoutes);

//global errors
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
