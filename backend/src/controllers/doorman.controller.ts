import { DoormanService } from "../services/doorman.service.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { Doorman } from "@prisma/client";

export class DoormanController {
    private doormanService: DoormanService;

    constructor() {
        this.doormanService = new DoormanService();
    }

    async getAllDoormen(req: FastifyRequest, res: FastifyReply) {
        try {
            const doormen = await this.doormanService.getAllDoormen();
            res.send(doormen);
        } catch (error) {
            res.status(500).send({ error: "Failed to fetch doormen" });
        }
    }

    async getDoormanById(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) {
        const id = parseInt(req.params.id);
        try {
            const doorman = await this.doormanService.getDoormanById(id);
            if (!doorman) {
                res.status(404).send({ error: "Doorman not found" });
                return;
            }
            res.send(doorman);
        } catch (error) {
            res.status(500).send({ error: "Failed to fetch doorman: " + error.message });
        }
    }
    async createDoorman(req: FastifyRequest, res: FastifyReply) {
        const doorman = req.body as Doorman;
        try {
            const newDoorman = await this.doormanService.createDoorman(doorman);
            res.status(201).send(newDoorman);
        } catch (error) {
            res.status(500).send({ error: "Failed to create doorman" });
        }
    }
}
