import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AutenticateUserUseCase";

class AuthenticaUserController {
    async handle(request: Request, response: Response) {
        const { password, email } = request.body;

        const authencicateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );

        const token = await authencicateUserUseCase.execute({
            email,
            password,
        });

        return response.status(200).json(token);
    }
}

export { AuthenticaUserController };
