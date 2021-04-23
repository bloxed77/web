const { error } = require('console');
const moment = require('moment')
const logger = (req,res,next,err)=>{

    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} at :  ${moment().format()}`);
    console.log(req.params);
    next();
}
module.exports = logger