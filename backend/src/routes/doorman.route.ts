import { FastifyInstance } from "fastify";

export async function doormanRoutes(app: FastifyInstance) {
    app.get("/doorman", async (request, reply) => {
        return { message: "Doorman route" };
    });

    app.get("/doorman/health", async (request, reply) => {
        return { status: "ok" };
    });
}
