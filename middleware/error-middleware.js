import HTTPErrors from 'http-errors'; // npm i http-errors

export default {
    
    logError(err, req, res, next) {
        req.error = err;
        console.log(err);
        next(err);
    },
    
    clientErrorHandler(err, req, res, next) {
        
        if (err instanceof HTTPErrors.HttpError)
            res.status(err.statusCode).send({ 'error': err.message });
        next(err);
    },
    errorHandler(err, req, res, next) {
        
        res.status(500).send('Seha producido un error', err.type)
    }
}