const catchError = require('../utilities/catchError');


exports.testGet = catchError(async(req, res,next)=>{
    const testData = req.params.testData;
    if(!testData) {
        return next(new AppError('No test Data found in request params',400));
    }
    res.status(200).json({
        status:'success',
        code:200,
        data:'testData'
    });
});