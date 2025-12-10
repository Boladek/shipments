const express = require("express");
const shipmentController = require("../controllers/shipmentController");
const shipmentValidation = require("../validations/shipmentValidation");
const validateRequest = require("../validations/validateRequest");
const shipmentSwagger = require("../swaggerDefs/shipmentSwagger");

const router = express.Router();

// Swagger annotations for GET /api/shipments
router.get(
    "/api/shipments",
    shipmentValidation.validatePaginationAndSearch,
    validateRequest,
    shipmentController.getShipments
);

// Swagger annotations for GET /api/shipments/:id
router.get("/api/shipments/:id", shipmentController.getShipmentById);

// Swagger annotations for POST /api/shipments
router.post(
    "/api/shipments",
    shipmentValidation.createShipmentValidation,
    validateRequest,
    shipmentController.createShipment
);

// Swagger annotations for PUT /api/shipments/:id
router.put(
    "/api/shipments/:id",
    shipmentValidation.updateShipmentValidation,
    validateRequest,
    shipmentController.updateShipment
);

// Swagger annotations for DELETE /api/shipments/:id
router.delete("/api/shipments/:id", shipmentController.deleteShipment);

module.exports = router;
