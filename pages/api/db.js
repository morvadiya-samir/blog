const mongoose = require('mongoose');

const connectdb = async () => {

    const uri = process.env.DB_URI;

    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.log("something went wrong" + error)
    }
}
module.exports = connectdb;
