const mongoose = require('mongoose');
const cloudinary = require("cloudinary");
const app = require('./app');

// uncaught exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');

    server.close(() => {
        process.exit(1);
    })

})

mongoose.connect(process.env.LOCAL_DB).then(data => {
    console.log(`Database connected to ${data.connection.host}`);
}).catch(error => console.log(`DB Connection error! --> ${error}`))

//cloudinary config
//file upload
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(process.env.PORT, () => {
    console.log('Server running!');
})

// unhandled rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise Rejection');

    server.close(() => {
        process.exit(1);
    })

})