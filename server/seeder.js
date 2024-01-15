import dotenv from 'dotenv';
import User from './models/userModel.js'
import Category from './models/categoryModel.js';
import Post from './models/postModel.js';
import dbConnect from './db/dbConnect.js';
import usersData from './data/users.js';
import categoriesData from './data/categories.js'
import postsData from './data/posts.js';

dotenv.config();

dbConnect();

const insertData = async () => {
    try {
        await User.deleteMany();
        await Category.deleteMany();
        await Post.deleteMany();

        const createUsers = await User.insertMany(usersData);
        const createCategory = await Category.insertMany(categoriesData);

        const adminUser = createUsers[0]._id;
        const sampleCategory = createCategory[0]._id;
        const samplePosts = postsData.map((item) => (
            {...item, author: adminUser, category: sampleCategory}
        ));

        await Post.insertMany(samplePosts);
        
        console.log('Data inserted.');
        process.exit();
    } catch (error) {
        console.log('error', error);
        process.exit(1);
    }
};

const deleteData = async () => {
    try {
        await User.deleteMany();
        await Category.deleteMany();
        await Post.deleteMany();

        console.log('Data deleted.');
        process.exit();
    } catch (error) {
        console.log('error', error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    deleteData();
} else {
    insertData();
}
