import { inject, injectable } from "tsyringe";

import { IUserRespository } from "@modules/accounts/repositories/IUserRespository";
import { deleteFile } from "@utils/file";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRespository
    ) {}

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
