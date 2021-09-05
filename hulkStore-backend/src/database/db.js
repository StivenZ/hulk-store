import mongoose from 'mongoose';
import config from './../config.js';

const connectDb = async () => {
    try {
        mongoose.connect(config.db.driver, () => {
            console.log('Successfully connected to MongoDB!');
        });
    } catch (e) {
        throw new Error('Could not connect to database');
    }
}

export default connectDb;