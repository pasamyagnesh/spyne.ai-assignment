// routes/carRoutes.js
const express = require('express');
const router = express.Router();

// Define your car-related routes
router.get('/', (req, res) => {
    res.json({ message: 'Get all cars' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Add a new car' });const express = require('express');
    const multer = require('multer'); // For handling file uploads
    const { uploadImage } = require('../utils/storage');
    
    const router = express.Router();
    
    // Set up multer
    const upload = multer({ dest: 'uploads/' });
    
    // Route to upload an image
    router.post('/upload', upload.single('image'), async (req, res) => {
        const filePath = req.file.path;
        const fileName = req.file.originalname;
    
        const publicUrl = await uploadImage(filePath, fileName);
    
        if (publicUrl) {
            res.status(200).json({ success: true, url: publicUrl });
        } else {
            res.status(500).json({ success: false, message: 'Upload failed' });
        }
    });
    
    module.exports = router;
    
});

// Export the router
module.exports = router;
