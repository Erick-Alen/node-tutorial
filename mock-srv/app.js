"use strict";
import AutoLoad from "@fastify/autoload";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pass --options via CLI arguments in command to enable these options.
export const options = {};

export default async function (fastify, opts) {
  // Place here your custom code!

  // Register CORS
  fastify.register(cors, {});
  // Register Websocket
  // A WebSocket requests starts off as an HTTP request, which is then upgraded to a TCP-like connection. This works by having a long-lived HTTP connection sending data encoding according to the WebSocket protocol standard.
  fastify.register(websocket, {});

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
}
