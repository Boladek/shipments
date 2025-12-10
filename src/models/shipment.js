const mongoose = require("mongoose");

const statuses = ["pending", "in_transit", "delivered", "cancelled"];

const shipmentSchema = new mongoose.Schema({
    trackingNumber: { type: String, required: true },
    senderName: { type: String, required: true },
    receiverName: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: statuses,
        default: statuses[0],
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

shipmentSchema.index({
    senderName: "text",
    receiverName: "text",
    origin: "text",
    destination: "text",
});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = {
    Shipment,
    statuses,
};
