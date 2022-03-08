import { Request, Response } from "express";

class UpdateUserAvatarControler {
    async handle(request: Request, response: Response) {
        const { user_id, avatar_file } = request.body;
    }
}

export { UpdateUserAvatarControler };
