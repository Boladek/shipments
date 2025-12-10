const Joi = require("joi");
const { statuses } = require("../models/shipment");

const shipmentSchema = Joi.object({
    senderName: Joi.string().required(),
    receiverName: Joi.string().required(),
    origin: Joi.string().required(),
    destination: Joi.string().required(),
});

const shipmentUpdateSchema = Joi.object({
    trackingNumber: Joi.string(),
    senderName: Joi.string(),
    receiverName: Joi.string(),
    origin: Joi.string(),
    destination: Joi.string(),
    status: Joi.string().valid(...statuses),
});

const createShipmentValidation = (req, res, next) => {
    const { error } = shipmentSchema.validate(req.body ?? {});
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const updateShipmentValidation = (req, res, next) => {
    const { error } = shipmentUpdateSchema.validate(req.body ?? {});
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const paginationAndSearchSchema = Joi.object({
    page: Joi.number().integer().min(1).default(1).optional(), // Default to page 1
    limit: Joi.number().integer().min(1).max(100).default(10).optional(), // Limit can be max 100
    search: Joi.string().allow("").optional(), // Search is optional, but if provided, it's a string
});

const validatePaginationAndSearch = (req, res, next) => {
    const { error } = paginationAndSearchSchema.validate(req.query);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    createShipmentValidation,
    updateShipmentValidation,
    validatePaginationAndSearch,
};
