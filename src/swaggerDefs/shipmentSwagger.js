/**
 * @swagger
 * /api/shipments:
 *   get:
 *     description: Get all shipments with optional pagination and text search.
 *     parameters:
 *       - name: page
 *         in: query
 *         description: The page number (defaults to 1).
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *           example: 1
 *       - name: limit
 *         in: query
 *         description: The number of shipments per page (defaults to 10, max 100).
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *           maximum: 100
 *           example: 10
 *       - name: search
 *         in: query
 *         description: The search text to filter shipments (optional).
 *         required: false
 *         schema:
 *           type: string
 *           default: ""
 *           example: "urgent"
 *     responses:
 *       200:
 *         description: Successfully retrieved shipments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shipments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       trackingNumber:
 *                         type: string
 *                         example: "12345"  # Pre-populated example data
 *                       senderName:
 *                         type: string
 *                         example: "John Doe"  # Pre-populated example data
 *                       receiverName:
 *                         type: string
 *                         example: "Jane Smith"  # Pre-populated example data
 *                       origin:
 *                         type: string
 *                         example: "New York"  # Pre-populated example data
 *                       destination:
 *                         type: string
 *                         example: "Los Angeles"  # Pre-populated example data
 *                       status:
 *                         type: string
 *                         example: "in_transit"  # Pre-populated example data
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-10-21T12:34:56Z"  # Pre-populated example data
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-10-22T12:34:56Z"  # Pre-populated example data
 *                 totalCount:
 *                   type: integer
 *                   example: 100  # Example total count for pagination
 *                 totalPages:
 *                   type: integer
 *                   example: 10  # Example total pages for pagination
 *                 currentPage:
 *                   type: integer
 *                   example: 1  # Example current page number
 *       400:
 *         description: Invalid query parameters
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/shipments/{id}:
 *   get:
 *     description: Get a single shipment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The shipment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved shipment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trackingNumber:
 *                   type: string
 *                   example: "12345"  # Pre-populated example data
 *                 senderName:
 *                   type: string
 *                   example: "John Doe"  # Pre-populated example data
 *                 receiverName:
 *                   type: string
 *                   example: "Jane Smith"  # Pre-populated example data
 *                 origin:
 *                   type: string
 *                   example: "New York"  # Pre-populated example data
 *                 destination:
 *                   type: string
 *                   example: "Los Angeles"  # Pre-populated example data
 *                 status:
 *                   type: string
 *                   example: "in_transit"  # Pre-populated example data
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-10-21T12:34:56Z"  # Pre-populated example data
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-10-22T12:34:56Z"  # Pre-populated example data
 *       404:
 *         description: Shipment not found
 */

/**
 * @swagger
 * /api/shipments:
 *   post:
 *     description: Create a new shipment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderName:
 *                 type: string
 *                 example: "Alice Cooper"  # Pre-populated example data
 *               receiverName:
 *                 type: string
 *                 example: "Bob Marley"  # Pre-populated example data
 *               origin:
 *                 type: string
 *                 example: "Chicago"  # Pre-populated example data
 *               destination:
 *                 type: string
 *                 example: "Miami"  # Pre-populated example data
 *     responses:
 *       201:
 *         description: Successfully created shipment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 senderName:
 *                   type: string
 *                 receiverName:
 *                   type: string
 *                 origin:
 *                   type: string
 *                 destination:
 *                   type: string
 *                 status:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Invalid data provided
 */

/**
 * @swagger
 * /api/shipments/{id}:
 *   put:
 *     description: Update a shipment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The shipment ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderName:
 *                 type: string
 *                 example: "Alice Cooper"  # Pre-populated example data
 *               receiverName:
 *                 type: string
 *                 example: "Bob Marley"  # Pre-populated example data
 *               origin:
 *                 type: string
 *                 example: "Chicago"  # Pre-populated example data
 *               destination:
 *                 type: string
 *                 example: "Miami"  # Pre-populated example data
 *               status:
 *                 type: string
 *                 enum: [pending, in_transit, delivered, cancelled]
 *                 example: "in_transit"  # Pre-populated example data
 *     responses:
 *       200:
 *         description: Successfully updated shipment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trackingNumber:
 *                   type: string
 *                 senderName:
 *                   type: string
 *                 receiverName:
 *                   type: string
 *                 origin:
 *                   type: string
 *                 destination:
 *                   type: string
 *                 status:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Invalid data provided
 *       404:
 *         description: Shipment not found
 */

/**
 * @swagger
 * /api/shipments/{id}:
 *   delete:
 *     description: Delete a shipment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The shipment ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Successfully deleted shipment
 *       404:
 *         description: Shipment not found
 */

module.exports = {
    // Export the Swagger definitions for all routes
};
