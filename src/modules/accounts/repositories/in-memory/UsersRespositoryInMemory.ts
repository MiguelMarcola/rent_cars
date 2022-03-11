import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/user";
import { IUserRespository } from "@modules/accounts/repositories/IUserRespository";

class UserRepositoryImMemory implements IUserRespository {
    users: User[] = [];

    async create({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            password,
            email,
            driver_license,
        });

        this.users.push(user);
    }
    async list(): Promise<User[]> {
        return this.users;
    }
    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
}

export { UserRepositoryImMemory };
