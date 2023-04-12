import AppDataSource from "../../data-source";
import { IPropertyRequest } from "../../interfaces/properties";
import { Address } from "../../entities/address.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/appErrors";

const createPropertyService = async ({
  address,
  tamanho,
  valor,
}: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const addressRepository = AppDataSource.getRepository(Address);

  const findAddres = await addressRepository.findOne({
    where: {
      cep: address.cep,
      cidade: address.cidade,
      complemento: address.complemento,
      estado: address.estado,
      logradouro: address.logradouro,
      numero: address.numero,
    },
  });

  if (findAddres) {
    throw new AppError(409, "Address already exists");
  }

  const propertyAddress = addressRepository.create({
    cep: address.cep,
    cidade: address.cidade,
    complemento: address.complemento,
    estado: address.estado,
    logradouro: address.logradouro,
    numero: address.numero,
  });

  await addressRepository.save(propertyAddress);

  const property = propertyRepository.create({
    tamanho: tamanho,
    valor: valor,
    address: propertyAddress,
  });

  await propertyRepository.save(property);

  return property;
};

export default createPropertyService;
