import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/appErrors";

const listSchedulePropertiesService = async (
  propertyId: string
): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const property = await propertyRepository.findOne({
    where: { id: propertyId },
    relations: { schedules: true },
  });

  if (!property) {
    throw new AppError(404, "Property not found");
  }
  return property;
};

export default listSchedulePropertiesService;
