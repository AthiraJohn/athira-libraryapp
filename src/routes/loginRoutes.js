const express =  require('express');
const loginRouter = express.Router();

function routerrss(navss){
   
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            navss,
             title: 'Library',
           
            });
    });
    loginRouter.get('/welcome',function(req,res){
        const id = req.params.id
        res.render("welcome",{
            navss:[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/addbook',name:'Addbook'},
            {link:'/addauthor',name:'Addauthor'},
            {link:'/',name:'Logout'}],
            title: 'Library'
        });
    });
    
    return loginRouter;

}

module.exports = routerrss;