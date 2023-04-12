import bcrypt from "bcryptjs";
import { AppError } from "../../errors/appErrors";
import AppDataSource from "../../data-source";
import { IUserRequest, IUser } from "../../interfaces/users";
import { User } from "../../entities/user.entity";

const createUserService = async ({
  adm,
  email,
  nome,
  password,
}: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { email: email },
  });

  if (findUser) {
    throw new AppError(409, "Email already exists");
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

  const returnUser: IUser = {
    id: user.id,
    nome: user.nome,
    email: user.email,
    adm: user.adm,
    createdAt: user.createdAt,
    updatedAt: user.updateAt,
  };
  return returnUser;
};

export default createUserService;
