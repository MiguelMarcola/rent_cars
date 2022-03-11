import { Router } from "express";

import { AuthenticaUserController } from "../../../../modules/accounts/useCases/authenticateUser/AutenticateUserController";

const authenticateRoutes = Router();

const authenticaUserController = new AuthenticaUserController();

authenticateRoutes.post("/sessions", authenticaUserController.handle);

export { authenticateRoutes };
