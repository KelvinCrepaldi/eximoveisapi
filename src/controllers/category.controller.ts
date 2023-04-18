import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoryService from "../services/categories/listCategory.service";
import listCategoryPropertiesService from "../services/categories/listCategoryProperties.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const { nome }: ICategoryRequest = req.body;
    const category = await createCategoryService({ nome });

    return res.status(200).json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await listCategoryService();
    return res.status(200).json(categories);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listCategoryPropertiesController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const category = await listCategoryPropertiesService(id);
    return res.json(category);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export {
  createCategoryController,
  listCategoryController,
  listCategoryPropertiesController,
};
