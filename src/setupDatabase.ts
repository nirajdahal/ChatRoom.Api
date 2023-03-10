import mongoose from 'mongoose'
import { config } from '@root/config'
import Logger from 'bunyan'
const log: Logger = config.createLogger('setupDatabase')
export default () => {
    const connect = () => {
        try {
            mongoose.set('strictQuery', true)
            mongoose.connect(config.DATABASE_URL!).then(() => {
                log.info("Database Added Sucessfullyyy")
            })
        } catch (error) {
            log.error("Error connecting to the database", error)
            return process.exit(1)
        }
    }
    connect()
    mongoose.connection.on('disconnected', connect)
}
