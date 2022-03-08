import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUserRespository } from "../../modules/accounts/repositories/IUserRespository";
import { ICategoriesRespository } from "../../modules/cars/repositories/ICategoriesRespository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRespository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRespository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationsRespository
);

container.registerSingleton<IUserRespository>("UserRepository", UserRepository);
