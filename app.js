const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const AppError = require('./utilities/appError');

const app = express();
app.use(cors({origin:'*'}));
app.use(express.static(`${__dirname}/assets`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());
app.use(compression());

 app.use((req,res,next)=>{
    req.date =new Date().toISOString();    
    next();
});

 app.get('/api/v2/test/:testdata',(req, res)=>{
    const testData = req.params.testdata;
    if(!testData || testData !== 'tests') {
        return next(new AppError('No test Data found in request params',400));
    }
    res.status(200).json({
        status:'success',
        code:200,
        data:true
    });
 });

module.exports = app;