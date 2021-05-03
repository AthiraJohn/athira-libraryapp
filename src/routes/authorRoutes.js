const express =  require('express');
const authorsRouter = express.Router();
const bodyParser = require('body-parser');

function routers(navv){
    var authors = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Italian',
            img: "author1.jpg"
        },
        {
            title: 'Harry Potter',
            author: 'J k Rowling',
            genre: 'British',
            img: "author2.jpg"
        },
        {
            title: 'Paathumayude aadu',
            author: 'Vaikom Muhammad Basheer',
            genre: 'Indian',
            img: "author3.jpg"
        },
        {
            title: 'The Girl on the Train',
            author: 'Paula Hawkins',
            genre: 'British',
            img: "author4.jpg"
        }
    ]
    authorsRouter.use(bodyParser.urlencoded({ extended: true }));
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            navv,
             title: 'Library',
            authors
            });
    });

    authorsRouter.post('/', function(req,res){
        var author = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        authors.push(author);
        res.render("authors", 
        {
            navv,
            title: 'Library App',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("author",{
            navv,
            title: 'Library',
            author: authors[id]
        });
    });

    return authorsRouter;

}

module.exports = routers;