import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/user";

interface IUserRespository {
    create(data: ICreateUserDTO): Promise<void>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUserRespository };
