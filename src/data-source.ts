import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { Property } from "./entities/property.entity";
import { Category } from "./entities/category.entity";
import { initial1680621615217 } from "./migrations/1680621615217-initial";
import { createProperty1681320737542 } from "./migrations/1681320737542-createProperty";
import { modifyPropertyColumOptions1681321299108 } from "./migrations/1681321299108-modifyPropertyColumOptions";
import { createCategory1681356519078 } from "./migrations/1681356519078-createCategory";
import { modifyCategoryTitle1681769377637 } from "./migrations/1681769377637-modifyCategoryTitle";
import { Schedule } from "./entities/schedule.entity";
import { createSchedule1681835449573 } from "./migrations/1681835449573-createSchedule";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: true,
  synchronize: false,
  entities: [User, Address, Property, Category, Schedule],
  migrations: [
    initial1680621615217,
    createProperty1681320737542,
    modifyPropertyColumOptions1681321299108,
    createCategory1681356519078,
    modifyCategoryTitle1681769377637,
    createSchedule1681835449573,
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
