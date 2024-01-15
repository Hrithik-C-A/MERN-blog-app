import { connect } from 'mongoose';

const dbConnect = async () => {
    try {
       const conn = await connect(process.env.MONGO_URI);
        console.log(`DB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

export default dbConnect;