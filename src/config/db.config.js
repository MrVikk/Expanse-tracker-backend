import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Export the configuration object
const dbConfig = {
  // Application settings
  port: process.env.PORT || 4000,


  // Database credentials
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "mysql",
};

export default dbConfig;
