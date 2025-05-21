import fastify from 'fastify';
import { DoormanRoutes } from './routes/doorman.route.js';

const fastifyInstance = fastify({ logger: true });

// Register routes
fastifyInstance.register(DoormanRoutes, { prefix: '/api' });

export default fastifyInstance;