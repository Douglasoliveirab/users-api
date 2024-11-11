import { FastifyInstance } from 'fastify';
import { getUsersController } from './getUsersController';

export const userRouter = async (fastify: FastifyInstance) => {
 
  await getUsersController(fastify);
};
