import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../entities/user";

interface IUserRespository {
    create(data: ICreateUserDTO): Promise<void>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUserRespository };
