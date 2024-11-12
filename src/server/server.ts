import dotenv from "dotenv";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import Fastify from "fastify";
import pool from "../database/db";
import { Router } from "../router";

dotenv.config();

const fastify = Fastify({ logger: true });

const port = process.env.API_PORT || 8080;

fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: "API users",
      description: "users API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
    // components: {
    //   securitySchemes: {
    //     bearerAuth: {
    //       type: 'http',
    //       scheme: 'bearer'
    //     }
    //   }
    // },
    tags: [
      {
        name: "Default",
        description: "Default endpoints",
      },
      {
        name: "Users",
        description: "Endpoint de usuarios",
      },
    ],
  },
});

fastify.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "none",
    deepLinking: false,
  },
});

async function start() {
  try {
    fastify.register(Router);
    // Tentar se conectar ao banco de dados
    const res = await pool.query("SELECT NOW()");

    // Se a consulta for bem-sucedida, exibe a mensagem de sucesso
    console.log("Conexão com o banco de dados estabelecida:", res.rows[0]);

    // Iniciar o servidor Fastify
    await fastify.listen({
      port: port as number,
    });

    // Gerar a documentação Swagger
    fastify.swagger();
    console.log(`Servidor rodando na porta ${port}`);

  } catch (err) {
    // Se houver erro na conexão com o banco de dados ou ao iniciar o servidor, ele será capturado aqui
    fastify.log.error(err);
    console.error("Erro ao conectar ao banco de dados ou iniciar o servidor");
    process.exit(1);
  }
}

start();
