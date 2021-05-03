const express = require('express');
const addAuthorRoutes = express.Router();
const Authors = require('./authorRoutes');
const bodyParser = require('body-parser'); 

function router(navv){
    addAuthorRoutes.use(bodyParser.urlencoded({ extended: false }));   
    addAuthorRoutes.use(bodyParser.json()); 

    addAuthorRoutes.get('/', function(req,res){
        res.render("addauthor", 
        {
            navv,
            title: 'Library'
        }); 
    });
    
    addAuthorRoutes.post('/', function(req,res){
        var author = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        authors.push(author);
    });

    return addAuthorRoutes
}

module.exports = router;