import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appErrors";

const listCategoryPropertiesService = async (id: string): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const category = await categoryRepository.findOne({
    where: { id: id },
    relations: { properties: true },
  });

  if (!category) {
    throw new AppError(404, "Category not found");
  }
  return category;
};

export default listCategoryPropertiesService;
