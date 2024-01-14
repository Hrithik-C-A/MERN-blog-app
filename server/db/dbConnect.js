import { connect } from 'mongoose';

const dbConnect = async () => {
    try {
        await connect(process.env.MONGO_URI);
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
};

export default dbConnect;