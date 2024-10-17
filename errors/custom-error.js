class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
module.exports =  CustomAPIError;

// class CustomAPIError extends Error {
//     constructor (
//         statusCode,
//         message = "Something went wrong",
//     ) {
//         super(message)
//         this.statusCode = statusCode
//         this.message = message
    
        
//     }
// }
// module.exports = CustomAPIError;