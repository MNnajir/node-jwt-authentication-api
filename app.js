require('dotenv').config()
require('express-async-errors')


const  express = require('express')
const  app = express()
//const connectDB = require('./db/connect')

//const CustomAPIError = require('./errors/custom-error.js')

const mainRouter = require('./routes/main')
const notFoundMiddlerware = require('./midllerware/not-found')
const errorHandlerMiddlerware = require('./midllerware/error-handler.js')



// middlerware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use(notFoundMiddlerware)
app.use(errorHandlerMiddlerware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        //await connectDB(process.env.MONGO_URL)
        app.listen(port, () => 
            console.log(`Server is running on port ${port}`)
        );
        } catch (error) {
            console.log(error);
        }
}
start()