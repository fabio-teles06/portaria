import { prisma } from '@/prisma/client';
import { Doorman } from '@prisma/client';

export class DoormanRepository {
    async create(data: Doorman): Promise<Doorman> {
        return await prisma.doorman.create({ data });
    }

    async findById(id: number): Promise<Doorman | null> {
        return await prisma.doorman.findUnique({ where: { id } });
    }
    
    async findAll(): Promise<Doorman[]> {
        return await prisma.doorman.findMany();
    }

    async update(id: number, data: Partial<Doorman>): Promise<
        Doorman | null> {
        return await prisma.doorman.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Doorman | null> {
        return await prisma.doorman.delete({ where: { id } });
    }
}