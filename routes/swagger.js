const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "On to Blog API",
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1",
      },
    ],
    basePath: "/",
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const setup = (app, PORT) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Swagger docs running on http://localhost:${PORT}/api/v1/docs`);
};

module.exports = setup;
