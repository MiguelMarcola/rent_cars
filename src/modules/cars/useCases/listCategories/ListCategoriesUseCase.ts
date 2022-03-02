import { Category } from "../../entities/Category";
import { ICategoriesRespository } from "../../repositories/ICategoriesRespository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRespository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
