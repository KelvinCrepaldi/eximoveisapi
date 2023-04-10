import bcrypt from "bcryptjs";

import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { User } from "../../entities/user.entity";

const createUserService = async ({
  adm,
  email,
  nome,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { email: email },
  });

  if (findUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userRepository.create({
    adm,
    email,
    nome,
    password: hashedPassword,
    ativo: true,
  });

  const test = await userRepository.save(user);
  console.log(test);
  return user;
};

export default createUserService;
