import { container } from "tsyringe";

import { UserRepository } from "@modules/accounts/infra/repositories/UsersRepository";
import { IUserRespository } from "@modules/accounts/repositories/IUserRespository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRespository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICategoriesRespository } from "@modules/cars/repositories/ICategoriesRespository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRespository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationsRespository
);

container.registerSingleton<IUserRespository>("UserRepository", UserRepository);
