const express = require('express');
const db = require('../models');
const router = express.Router();

// GET /posts/new - sends the form for creating a a new post
router.get('/new', function(req, res) {
    db.author.findAll()
        .then(function(authors) {
            res.render('posts/new', {authors});
        });
});

// GET /posts/:id - returns the selected post and its author
router.get('/:id', function(req, res) {
    db.post.findOne({
        where: {id: parseInt(req.params.id)},
        include: [db.author, db.comment, db.tag]

    }).then(function(post){
        res.render('posts/show', {post})
    });
});

// POST /posts - creates a new post record
router.post('/', function(req, res) {
    // db.author.findByPk(parseInt(req.body.authorId))
    // .then(function(author) {
    //     author.createPost({
    //         title: req.body.title,
    //         content: req.body.content
    //     }).then(function(post){
    //         res.redirect('/posts')
    //     })
    // })
    db.post.create({
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId
    }).then(function(post) {
        res.redirect('/');
    });
});

module.exports = router;