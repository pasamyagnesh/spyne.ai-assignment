const supabase = require('./db');

// Function to upload an image to Supabase Storage
const uploadImage = async (filePath, fileName) => {
    const { data, error } = await supabase.storage
        .from('car-images')
        .upload(fileName, filePath, {
            contentType: 'image/jpeg', // Adjust for file type
        });

    if (error) {
        console.error('Error uploading image:', error.message);
        return null;
    }

    // Get the public URL of the uploaded file
    const { data: { publicUrl } } = supabase.storage
        .from('car-images')
        .getPublicUrl(fileName);

    return publicUrl;
};

module.exports = { uploadImage };
