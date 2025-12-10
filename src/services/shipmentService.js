const mongoose = require("mongoose");
const { generateTrackingNumber } = require("../helpers");
const { Shipment } = require("../models/shipment");

const getAllShipments = async () => {
    return await Shipment.find();
};

const getShipmentsWithPagination = async (query, page, limit) => {
    try {
        // Calculate the skip value for pagination
        const skip = (page - 1) * limit;

        // Find shipments with pagination and text search
        const shipments = await Shipment.find(query)
            .skip(skip)
            .limit(limit)
            .exec();

        // Get total count for pagination
        const totalCount = await Shipment.countDocuments(query).exec();

        // Return the results with pagination info
        return {
            shipments,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
        };
    } catch (err) {
        throw new Error("Error fetching shipments: " + err.message);
    }
};

const getShipmentById = async (id) => {
    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null; // Return null if id is invalid
    }

    const shipment = await Shipment.findById(id);
    return shipment;
};

const createShipment = async (shipmentData) => {
    const trackingNumber = generateTrackingNumber();
    const shipment = new Shipment({ ...shipmentData, trackingNumber });
    return await shipment.save();
};

const updateShipment = async ({ id, shipmentData }) => {
    console.log({ shipmentData, id });
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null; // Return null if id is invalid
    }
    return await Shipment.findByIdAndUpdate(id, shipmentData, { new: true });
};

const deleteShipment = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return null; // Return null if id is invalid
    }
    return await Shipment.findByIdAndDelete(id);
};

module.exports = {
    getAllShipments,
    getShipmentById,
    createShipment,
    updateShipment,
    deleteShipment,
    getShipmentsWithPagination,
};
