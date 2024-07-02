import mongoose from 'mongoose';

let databaseConnected = false;

const connectDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (databaseConnected) {
        console.log('Success! MongoDB is connected!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        databaseConnected = true;
        console.log('Connected and ready to go!');
    } catch (error) {
        console.log('Holy smokes batman! The database is not connected!', error);
    }
};

export default connectDatabase;