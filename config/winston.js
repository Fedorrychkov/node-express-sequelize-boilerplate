var appRoot = require('app-root-path');
import winston, { format } from 'winston';
const moment = require('moment');
require('dotenv').config();

const { combine, timestamp, label, printf } = format;


const myFormat = printf(info => {
    return `${moment().format('DD.MM.YYYY HH:mm:ss Z')} [${info.label}] ${info.level}: ${info.message}`;
});

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        format: combine(
            label({ label: 'logging' }),
            timestamp(),
            myFormat
        ),
    },
    errorFile: {
        level: 'error',
        filename: `${appRoot}/logs/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        format: combine(
            label({ label: 'err' }),
            timestamp(),
            myFormat
        ),
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: combine(
            label({ label: 'logging' }),
            timestamp(),
            myFormat
        ),
    },
};
/**
 * method for write log information about application work on logs folder, using Winston
 */
const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
        new winston.transports.File(options.errorFile)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    },
};

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}


export default logger;
