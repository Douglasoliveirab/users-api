import { FastifyInstance } from 'fastify';
import { getUsersController } from './getUsersController';
import { newUserController } from './newUserController';

export const userRouter = async (fastify: FastifyInstance) => {
 
  await  fastify.register(getUsersController);
  await  fastify.register(newUserController);
};
