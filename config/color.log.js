import chalk from 'chalk';
const moment = require('moment');

const show  = {
    err: chalk.bold.red,
    warning: chalk.keyword('orange'),
    common: chalk.keyword('gray'),
    debug: chalk.keyword('yellow'),
};

const myFormat = info => `${moment().format('DD.MM.YYYY HH:mm:ss Z')}: ${info}`;


export default class Log {
    
    err(prop) {
        console.log(show.err(myFormat(prop)));
    }

    warning(prop) {
        console.log(show.warning(myFormat(prop)));
    }

    common(prop) {
        console.log(show.common(myFormat(prop)));
    }

    debug(prop) {
        console.log(show.debug(myFormat(prop)));
    }
}
