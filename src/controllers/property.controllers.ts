import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertyService from "../services/properties/createProperty.service";
import listPropertyService from "../services/properties/listProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  try {
    const { address, tamanho, valor, categoryId }: IPropertyRequest = req.body;
    const property = await createPropertyService({
      address,
      tamanho,
      valor,
      categoryId,
    });
    return res.status(200).json(property);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listPropertyController = async (req: Request, res: Response) => {
  try {
    const property = await listPropertyService();
    return res.status(200).json(property);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createPropertyController, listPropertyController };
