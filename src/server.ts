import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
    {
        id: 1,
        name: "McLaren",
        base: "Woking, United Kingdom"
    },
    {
        id: 2,
        name: "Mercedes",
        base: "Brackley, United Kingdom"
    }
];

const drivers = [
    {
        id: 1,
        name: "Carlos Sainz",
        teamId: 1
    },
    {
        id: 2,
        name: "Lando Norris",
        teamId: 2
    }
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);

    return teams;
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)

    return drivers;
});

server.listen({ port: 3333 }, () => {
    console.log("Server running on port 3333");
});