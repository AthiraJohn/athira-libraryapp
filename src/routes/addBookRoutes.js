const express = require('express');
const addBookRoutes = express.Router();
const books = require('./bookRoutes');
const bodyParser = require('body-parser'); 

function router(navv){
    addBookRoutes.use(bodyParser.urlencoded({ extended: false }));   
    addBookRoutes.use(bodyParser.json()); 

    addBookRoutes.get('/', function(req,res){
        res.render("addbook", 
        {
            navv,
            title: 'Library'
        }); 
    });
    
    addBookRoutes.post('/', function(req,res){
        var book = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        books.push(book);
    });

    return addBookRoutes
}

module.exports = router;