const mongoose = require('mongoose');
exports.dbconn = async ()=>{
    try{
        const connectionString = "mongodb+srv://arjyamandas:abcdxyz12345@cluster0.kb3qhlh.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(connectionString , {
            useNewUrlParser:true , useUnifiedTopology:true});
        console.log('Database Connected');
    }
    catch(err)
    {
       console.log( `database connection error  ${err.message}`);
    }
}
