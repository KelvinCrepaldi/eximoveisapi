import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import * as bcryptjs from "bcryptjs";
import "dotenv/config";

const createSessionUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  if (!user.ativo) {
    throw new Error("User is not active");
  }

  const passwordMatch = await bcryptjs.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user.id, adm: user.adm },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1h",
    }
  );

  return token;
};

export default createSessionUserService;
