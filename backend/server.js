// import fastify from 'fastify';
// import path from 'path';
// import fastifyStatic from '@fastify/static';

// // Register static plugin to serve files from the root directory
// fastify.register(fastifyStatic, {
//   root: path.join(__dirname),
//   prefix: '/', // optional: default is '/'
// });

// // Default route to serve index.html
// fastify.get('/', (request, reply) => {
//   reply.sendFile('index.html'); // index.html must be in the root folder
// });

// // Start the server
// fastify.listen({ port: 3000 }, (err, address) => {
//   if (err) {
//     fastify.log.error(err);
//     process.exit(1);
//   }
//   fastify.log.info(`Server listening at ${address}`);
// });


import fs from 'fs'
import Fastify from 'fastify'
// import path from 'path'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'

const fastify = Fastify({
  logger: true
})

// Register static plugin to serve files from the root directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../dist'), // Serve files from the dist directory
  prefix: '/', // Optional: default is '/'
});

// Declare a route
fastify.get("/", async function handler (request, reply) {
  // Envía directamente el archivo index.html como respuesta
  return reply.sendFile('index.html');
});

// Run the server!
try {
  await fastify.listen({ port: 80, host: '0.0.0.0'})
  
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}