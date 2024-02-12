const dotenv = require('dotenv');

// Catching Uncaught Exception Error
process.on('unCaughtException', err => {
    console.log('Caught Exception');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');
dotenv.config({path:'./config.env'});

const port = process.env.PORT ||3000;

const server = app.listen(port);

console.log('connected to server!' , port);


// Error handler for bad request
process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection ! Shutting down.........');
    console.log( err.message);
    server.close( () => {
        process.exit(1);
    });
});