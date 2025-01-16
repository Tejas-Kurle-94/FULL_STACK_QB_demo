const { response } = require('express');
const postModel = require('../models/post.model');

const test = (req, res) => {
    console.log(req.body);
    res.send('Hello, we are live on the server! 🚀');
}

const createPost = async (req, res, next) => {
    // console.log(req.body);
    const { topic, question, answer } = req.body;
    const responseData = await postModel.create({
        topic,
        question,
        answer
    });
    res.send({
        success: true,
        responseData
    })
}

const getAllPosts = async (req, res, next) => {
    const responseData = await postModel.find({});
    res.send({
        success: true,
        responseData
    })
}

const getSinglePost = async (req, res, next) => {
    const { postID } = req.query;
    // console.log(req.query);
    const responseData = await postModel.findById(postID);
    res.send({
        success: true,
        responseData
    })
}

const deletePost = async (req, res, next) => {
    const { postID } = req.body;
    const responseData = await postModel.findByIdAndDelete(postID);
    res.send({
        success: true,
        responseData
    });
}

const updatePost = async (req, res, next) => {
    const { postID, topic, question, answer } = req.body;
    const responseData = await postModel.findByIdAndUpdate(postID, {
        topic,
        question,
        answer
    }, { new: true }); //todo: you should pass this parameter to see new updated data in response
    res.send({
        success: true,
        responseData
    });
}

module.exports = { test, createPost, getAllPosts, getSinglePost, deletePost, updatePost };