import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (!user.ativo) {
    throw new AppError(404, "Inactive user");
  }

  user.ativo = false;
  await userRepository.save(user);
};

export default deleteUserService;
