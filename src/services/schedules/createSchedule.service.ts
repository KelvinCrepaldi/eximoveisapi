import AppDataSource from "../../data-source";
import { Schedule } from "../../entities/schedule.entity";
import { User } from "../../entities/user.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/appErrors";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async ({
  horario_visita,
  propertyId,
  userId,
}: IScheduleRequest): Promise<void> => {
  const scheduleRepository = AppDataSource.getRepository(Schedule);
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Property);
  const dateNow = new Date(Date.now());
  const date = new Date(horario_visita);

  const property = await propertyRepository.findOneBy({ id: propertyId });
  if (!property) {
    throw new AppError(404, "Property not found");
  }

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (dateNow > date) {
    throw new AppError(
      422,
      "Invalid date for scheduling, it is not possible to schedule dates that have already passed"
    );
  }

  const findUserSchedule = await userRepository
    .createQueryBuilder("users")
    .leftJoinAndSelect("users.schedules", "schedules")
    .where("users.id = :id", { id: userId })
    .andWhere("schedules.horario_visita = :horario_visita", {
      horario_visita: horario_visita,
    })
    .getOne();

  if (findUserSchedule) {
    throw new AppError(409, "User schedule already exists");
  }

  const findPropertySchedule = await propertyRepository
    .createQueryBuilder("properties")
    .leftJoinAndSelect("properties.schedules", "schedules")
    .where("properties.id = :id", { id: propertyId })
    .andWhere("schedules.horario_visita = :horario_visita", {
      horario_visita: horario_visita,
    })
    .getOne();

  if (findPropertySchedule) {
    throw new AppError(409, "Property schedule already exists");
  }

  const schedule = await scheduleRepository.create({
    horario_visita,
    property,
    user,
  });
  scheduleRepository.save(schedule);
};

export default createScheduleService;
