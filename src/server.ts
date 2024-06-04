import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)

    return [
        {
            id: 1,
            name: "Team 1"
        },
        {
            id: 2,
            name: "Team 2"
        }
    ]
});

server.listen({ port: 3333 }, () => {
    console.log("Server running on port 3333");
});