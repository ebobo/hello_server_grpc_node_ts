import { fastify } from 'fastify';
import { fastifyConnectPlugin } from '@connectrpc/connect-fastify';
import routes from './connect.js';
import fastifyCors from '@fastify/cors';

const server = fastify();
// Enable CORS
server.register(fastifyCors, {
  origin: '*', // Allow all origins, adjust this to your needs
});

await server.register(fastifyConnectPlugin, {
  routes,
});
server.get('/', (_, reply) => {
  reply.type('text/plain');
  reply.send('gRPC server Main page');
});
await server.listen({ host: 'localhost', port: 9088 });
console.log('server is listening at', server.addresses());
