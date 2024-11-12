import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { UserService } from "../../services/users/user-service";

const userService = new UserService();

export const newUserController = async (fastify: FastifyInstance) => {
  fastify.post("/newUser", {
    schema: {
      description: "Listar todos os usuários",
      tags: ["Users"],
      response: {
        200: {
          description: "Lista de usuários",
          type: "array",
          items: {
            type: "object",
            properties: {
              first_name: { type: "string" },
              last_name: { type: "string" },
              email: { type: "string" },
              phone: { type: "string" },
              role: { type: "string" },
              cpf: { type: "string", nullable: true },
              password: { type: "string" },
              is_active: { type: "boolean" },
              created_at: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },

    handler: async (request: FastifyRequest, reply: FastifyReply) => {
    //   try {
    //     const users = await userService.getAllUsers();
    //     return reply.status(200).send(users);
    //   } catch (error) {
    //     return reply.status(500).send({
    //       message: "Erro ao obter os usuários",
    //       error: error.message,
    //     });
    //   }
    },
  });
};
