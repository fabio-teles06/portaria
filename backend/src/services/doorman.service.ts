import { DoormanRepository } from "../repositories/doorman.repository.js";
import { Doorman } from "@prisma/client";



export class DoormanService {
    private doormanRepository: DoormanRepository;

    constructor() {
        this.doormanRepository = new DoormanRepository();
    }

    async getAllDoormen() {
        return await this.doormanRepository.findAll();
    }

    async getDoormanById(id: number) {
        return await this.doormanRepository.findById(id);
    }

    async createDoorman(doorman: Doorman) {
        return await this.doormanRepository.create(doorman);
    }

}