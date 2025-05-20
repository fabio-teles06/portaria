import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const fastifyInstance = fastify({ logger: true });
const prisma = new PrismaClient();

fastifyInstance.get('/api/vehicles/out', async (request, reply) => {
  const resultado = await prisma.$queryRawUnsafe(`
    SELECT v.id, v.plate, v.model, v.brand, v.driverName, m.date AS exitDate
    FROM Vehicle v
    JOIN (
    SELECT vehicleId, MAX(date) AS lastMovementDate
    FROM Movements
    GROUP BY vehicleId
    ) AS lastMovements ON v.id = lastMovements.vehicleId
    JOIN Movements m ON m.vehicleId = v.id AND m.date = lastMovements.lastMovementDate
    WHERE m.type = 'exit';
  `);
  return resultado;
});

fastifyInstance.get('/api/vehicles/movements', async (request, reply) => {
  //all vehicles movements
  const resultado = await prisma.$queryRawUnsafe(`
    SELECT v.id, v.plate, v.model, v.brand, v.driverName, m.date AS movementDate, m.type AS movementType
    FROM Vehicle v
    JOIN Movements m ON m.vehicleId = v.id
    ORDER BY m.date DESC;
  `);

  return resultado;
});

export default fastifyInstance;