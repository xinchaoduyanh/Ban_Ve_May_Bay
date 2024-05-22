import dotenv from 'dotenv'

dotenv.config()

export const envConfig = {
  port: process.env.PORT as string,
  databaseUrl: process.env.DATABASE_URL,
  databaseProvider: process.env.DATABASE_PROVIDER
}
