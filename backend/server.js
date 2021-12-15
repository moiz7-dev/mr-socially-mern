const mongoose = require('mongoose');
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