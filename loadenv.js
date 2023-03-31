import { config } from "dotenv";

export default function Env() {
  const env = config({
    path: `./.env.${process.env.NODE_ENV}` || "production"
  });

  if (env.error) {
    throw env.error;
  }
  const {
    PORT,
    DATABASE_TYPE,
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD
  } = env.parsed;
  return {
    server: {
      port: parseInt(PORT, 10)
    },
    database: {
      MONGODB_URI: DATABASE_TYPE + DATABASE_USER + DATABASE_PASSWORD + DATABASE_NAME
    }
  }
}