import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({
  nome,
}: ICategoryRequest): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = await categoryRepository.save({
    nome: nome,
  });

  return category;
};

export default createCategoryService;
