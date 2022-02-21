import { Category } from "../../model/Category";
import { ICategoriesRespository } from "../../repositories/ICategoriesRespository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRespository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
