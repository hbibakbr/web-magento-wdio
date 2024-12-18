function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 8); // Membuat string acak
    return `test_${randomString}@example.com`; // Membuat email dengan format tertentu
}

module.exports = { generateRandomEmail };