import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { UserService } from "../../services/users/user-service";

const userService = new UserService();

export const getUsersController = async (fastify: FastifyInstance) => {
  fastify.get("/users", {
    schema: {
      description: "Listar todos os usuários",
      tags: ["User"],
      response: {
        200: {
          description: "Lista de usuários",
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "number" },
              first_name: { type: "string" },
              last_name: { type: "string" },
              email: { type: "string" },
              telefone: { type: "string" },
              cpf: { type: "string", nullable: true },
              is_active: { type: "boolean" },
              created_at: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },

    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const users = await userService.getAllUsers();
        return reply.status(200).send(users);
      } catch (error) {
        return reply.status(500).send({
          message: "Erro ao obter os usuários",
          error: error.message,
        });
      }
    },
  });
};
