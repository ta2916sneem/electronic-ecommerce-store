import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

const URI = `mongodb+srv://${user}:${password}@cluster0.4peua.mongodb.net/${db_name}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    console.log(`Trying to connect to mongo...`.cyan.bold);
    console.log(`Using connection URI: ${URI}`.cyan.bold);
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(error);
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
