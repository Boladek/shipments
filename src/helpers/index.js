function generateTrackingNumber() {
    const prefix = "TRK"; // The prefix "TRK"
    const length = 7; // Desired length of the tracking number
    const remainingLength = length - prefix.length; // Calculate how many characters to generate

    // Generate a random alphanumeric string of the required length
    const randomString = Math.random()
        .toString(36)
        .substring(2, 2 + remainingLength);

    // Return the tracking number starting with "TRK"
    return prefix + randomString.toUpperCase(); // Ensuring it’s in uppercase
}

module.exports = {
    generateTrackingNumber,
};
