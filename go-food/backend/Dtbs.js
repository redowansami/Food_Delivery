const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sami:merndatabase@clustermern.tqwzg.mongodb.net/gofood?retryWrites=true&w=majority&appName=Clustermern'
// const mongoDB = async () =>{
//     await mongoose.connect(mongoURI)
//     .then(()=>console.log("connected"));
// }
const mongoDB = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(async () => {
            console.log('MongoDB connected')
            const fetched_data = await mongoose.connection.db.collection("foodData");
            const data = await fetched_data.find({}).toArray();
            // console.log(data);
        })
        .catch (err => console.log(err));
}
module.exports = mongoDB;