import { FastifyInstance } from "fastify";
import { DoormanController } from "../controllers/doorman.controller.js";

const doormanController = new DoormanController();

export async function DoormanRoutes(app: FastifyInstance) {

    app.get("/", async (req, res) => {
        res.send({ message: "Welcome to the Doorman API" });
    });
    app.get("/doorman", doormanController.getAllDoormen.bind(doormanController));
    app.get("/doorman/:id", doormanController.getDoormanById.bind(doormanController));
    app.post("/doorman", doormanController.createDoorman.bind(doormanController));
}
