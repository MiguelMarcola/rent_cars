import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(
            token,
            "5eb63bbbe01eeed093cb22bb8f5acdc3"
        ) as IPayload;
        console.log(sub);

        const userRepository = new UserRepository();

        const user = await userRepository.findById(sub);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
