import dotenv from 'dotenv';
dotenv.config();

console.log("Over here");
console.log(process.env.SERVER_API_ADDRESS);
console.log(process.env.DB_USERNAME)

export const API = process.env.SERVER_API_ADDRESS