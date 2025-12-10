// const Shipment = require("../models/shipment");
const shipmentService = require("../services/shipmentService");

const getShipments = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, search = "" } = req.query;

        // Parse pagination values to integers
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        // Set up query for text search and pagination
        const query = search ? { $text: { $search: search } } : {};

        // Find shipments with pagination and search query
        const shipments = await shipmentService.getShipmentsWithPagination(
            query,
            pageNumber,
            limitNumber
        );

        res.json(shipments);
        // const shipments = await shipmentService.getAllShipments();
        // res.json(shipments);
    } catch (err) {
        next(err);
    }
};

const getShipmentById = async (req, res, next) => {
    try {
        const shipment = await shipmentService.getShipmentById(req.params.id);
        if (!shipment)
            return res.status(404).json({ message: "Shipment not found" });
        res.json(shipment);
    } catch (err) {
        next(err);
    }
};

const createShipment = async (req, res, next) => {
    try {
        const shipment = await shipmentService.createShipment(req.body);
        res.status(201).json(shipment);
    } catch (err) {
        next(err);
    }
};

const updateShipment = async (req, res, next) => {
    try {
        const shipment = await shipmentService.updateShipment({
            id: req.params.id,
            shipmentData: req.body,
        });
        if (!shipment)
            return res.status(404).json({ message: "Shipment not found" });
        res.json(shipment);
    } catch (err) {
        next(err);
    }
};

const deleteShipment = async (req, res, next) => {
    try {
        const shipment = await shipmentService.deleteShipment(req.params.id);
        if (!shipment)
            return res.status(404).json({ message: "Shipment not found" });
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getShipments,
    getShipmentById,
    createShipment,
    updateShipment,
    deleteShipment,
};
