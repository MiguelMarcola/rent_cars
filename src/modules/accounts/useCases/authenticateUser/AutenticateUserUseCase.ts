import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRespository } from "../../repositories/IUserRespository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRespository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect", 401);
        }

        const passswordMatch = await compare(password, user.password);

        if (!passswordMatch) {
            throw new AppError("Email or password incorrect", 401);
        }

        const token = sign({}, "5eb63bbbe01eeed093cb22bb8f5acdc3", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokkenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokkenReturn;
    }
}

export { AuthenticateUserUseCase };
