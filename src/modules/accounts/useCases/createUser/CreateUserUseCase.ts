import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRespository } from "../../repositories/IUserRespository";

interface IRequest {
    name: string;
    password: string;
    email: string;
    driver_license: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRespository
    ) {}

    async execute({
        name,
        password,
        email,
        driver_license,
    }: IRequest): Promise<void> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new AppError("Email alredy exists!");
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
