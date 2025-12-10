const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Shipment API",
            version: "1.0.0",
            description: "A simple REST API to manage shipments",
        },
    },
    apis: [path.join(__dirname, "/swaggerDefs/*.js")], // Automatically reference all the swagger definitions
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
    // Swagger UI endpoint
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
