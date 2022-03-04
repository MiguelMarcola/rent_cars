import { inject, injectable } from "tsyringe";

import { ICategoriesRespository } from "../../repositories/ICategoriesRespository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRespository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category alredy exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
