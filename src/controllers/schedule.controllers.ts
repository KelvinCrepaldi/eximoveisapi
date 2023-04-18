import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { IScheduleRequest } from "../interfaces/schedules";
import createScheduleService from "../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  try {
    const { horario_visita, propertyId } = req.body;
    const userId = req.user.id;

    await createScheduleService({
      horario_visita,
      propertyId,
      userId,
    });

    return res.status(200).json({ message: "Schedule created" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createScheduleController };
