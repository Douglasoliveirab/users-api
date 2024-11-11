import { FastifyInstance } from "fastify";
import { userRouter } from "./controllers/users/@userRouter";

export const Router = async (fastify: FastifyInstance) => {
  await fastify.register(userRouter);
};
