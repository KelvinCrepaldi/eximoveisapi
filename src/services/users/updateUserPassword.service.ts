import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUserUpdatePassword } from "../../interfaces/users";
import * as bcrypt from "bcryptjs";

const updateUserPasswordService = async (
  { newPassword }: IUserUpdatePassword,
  id: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const hashPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashPassword;

  await userRepository.save(user);
};

export default updateUserPasswordService;
