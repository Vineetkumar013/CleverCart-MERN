const mongoose = require("mongoose")

const connectDB = () => {
    try {
        const conn =  mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected Successfully ")
    }
    catch(err) {
        console.log("Mongo DB Connection Failed!")
    }
}

module.exports = connectDB