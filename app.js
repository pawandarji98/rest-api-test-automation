const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const testRouter = require('./routers/test-router');
const globalErrorHandler = require('./controllers/errorController');
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

 app.use('/api/v1/test',testRouter);

 app.get('/',(req, res)=>{
   res.status(200).json({
       status:'success',
       data:{
           message:'Node Express Server running.....'
       }
   })
 });
// ROUTES ERROR HANDLER
app.all('*',(req,res,next)=>{
   
    next(new AppError(`can't find ${req.originalUrl} on this server`,404));
});
app.use(globalErrorHandler);
module.exports = app;