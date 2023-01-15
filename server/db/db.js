const mongoose = require("mongoose");
// const { Schema } = mongoose;

module.exports = async () => {
    try{
        await mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected to mongodb");
    }catch(error){
        console.error(error);
    }
};


// const usersSchema = new Schema({
//     name: {type:String, required: true},
//     email: {type:String, required: true},
//     password:  {type:String, required: true}
//   },
//   { collection: 'users' });
//   module.exports= mongoose.model('Users', usersSchema);