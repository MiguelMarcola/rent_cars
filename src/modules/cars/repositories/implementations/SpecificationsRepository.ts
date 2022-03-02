import { Specification } from "../../entities/Specification";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRespository implements ISpecificationRepository {
    private specification: Specification[];

    private static INSTANCE: SpecificationsRespository;

    constructor() {
        this.specification = [];
    }

    public static getInstance(): SpecificationsRespository {
        if (!SpecificationsRespository.INSTANCE) {
            SpecificationsRespository.INSTANCE =
                new SpecificationsRespository();
        }
        return SpecificationsRespository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date(),
        });

        this.specification.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specification.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationsRespository };
