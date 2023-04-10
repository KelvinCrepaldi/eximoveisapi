import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { initial1680621615217 } from "./migrations/1680621615217-initial";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: true,
  synchronize: false,
  entities: [User],
  migrations: [initial1680621615217],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
