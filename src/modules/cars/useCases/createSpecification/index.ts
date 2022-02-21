import { SpecificationsRespository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpacificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRespository = SpecificationsRespository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRespository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
