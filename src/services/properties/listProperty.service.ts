import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";

const listPropertyService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const properties = await propertyRepository.find({
    where: {
      vendido: false,
    },
  });

  return properties;
};

export default listPropertyService;
