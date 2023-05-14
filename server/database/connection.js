const mongoose = require('mongoose');
const username = encodeURIComponent('test');
const password = encodeURIComponent('test');
const dbName = 'test';
const uri = `mongodb+srv://test:test@cluster0.9hq1mn8.mongodb.net/test?retryWrites=true&w=majority`;

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
