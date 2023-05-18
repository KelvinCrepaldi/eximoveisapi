import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUserUpdateRequest } from "../../interfaces/users";

const updateUserService = async (
  { email, nome }: IUserUpdateRequest,
  id: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (email !== undefined) {
    user.email = email;
  }

  if (nome !== undefined) {
    user.nome = nome;
  }

  await userRepository.save(user);
};

export default updateUserService;
