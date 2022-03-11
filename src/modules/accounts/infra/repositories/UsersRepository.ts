import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/user";
import { IUserRespository } from "@modules/accounts/repositories/IUserRespository";

class UserRepository implements IUserRespository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create({
        name,
        password,
        email,
        driver_license,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password,
            email,
            driver_license,
            avatar,
            id,
        });

        await this.repository.save(user);
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ id });
        return user;
    }
}

export { UserRepository };
