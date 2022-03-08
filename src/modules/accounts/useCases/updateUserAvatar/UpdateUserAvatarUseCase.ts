import { inject } from "tsyringe";

import { IUserRespository } from "../../repositories/IUserRespository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

class UpdateUserAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRespository
    ) {}

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
