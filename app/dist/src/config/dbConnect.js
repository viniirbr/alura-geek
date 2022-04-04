import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://viniribeiro99:180099@cluster0.6njvm.mongodb.net/alura-geek");
let db = mongoose.connection;
export default db;
