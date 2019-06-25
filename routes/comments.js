const express = require('express');
const db = require('../models');
const router = express.Router();

// POST /posts - creates a new comment on the post page
router.post("/", function(req, res) {
    db.comment.create({
        author: req.body.author,
        comment: req.body.comment,
        postId: req.body.postId
    }).then(function(comment){
        res.redirect(`/posts/${req.body.postId}`);
    })
})

module.exports = router;