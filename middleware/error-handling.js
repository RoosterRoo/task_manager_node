const { CustomError } = require('../errors/custom-error')

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    res.status(500).json({msg: "Something went wrong. Please try again"})
}

module.exports = errorHandler