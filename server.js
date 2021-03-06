const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const db = require('./models');
const moment = require('moment');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));

app.use(function(req, res, next){
    res.locals.moment = moment;
    next();
});

// GET / - display all posts and their authors
app.get('/', function(req, res) {
    db.post.findAll({
        include: [db.author]
    }).then(function(posts){
        res.render("index",{posts});
    });
});

// GET all


// CREATE NEW



// mounts
app.use('/authors', require('./routes/authors'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/tags', require('./routes/tags'));

app.listen(3000);