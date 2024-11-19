"use strict";

export default async function (fastify) {
  fastify.get("/", async function (request, reply) {
    {
      return { "id": "A1", "name": "Vacuum Cleaner", "rrp": "99.99", "info": "The suckiest vacuum in the world." }
      }
    }
  )
}
