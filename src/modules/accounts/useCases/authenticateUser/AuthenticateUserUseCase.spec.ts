import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { UserRepositoryImMemory } from "@modules/accounts/repositories/in-memory/UsersRespositoryInMemory";
import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";
import { AppError } from "@shared/errors/AppError";

import { AuthenticateUserUseCase } from "./AutenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRespositoryInMemory: UserRepositoryImMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRespositoryInMemory = new UserRepositoryImMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRespositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(usersRespositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "0000123",
            email: "jonhdoe@email.com",
            password: "1234",
            name: "John Doe",
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("shold not be able to authenticate an noneexstent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "false",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("shold not be able to authenticate with  incorret password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "00001234",
                email: "jonhdoe2@email.com",
                password: "12345",
                name: "John Doe2",
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "false",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
