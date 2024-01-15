import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'Category' 
    },
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
}, {
    timestamps: true
});

const Post  =  model('Post', postSchema);

export default Post;