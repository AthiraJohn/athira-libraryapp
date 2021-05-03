const express =  require('express');
const signupRouter = express.Router();

function routerss(navs){
   
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            navs,
             title: 'Library',
           
            });
    });


   signupRouter.get('/welcome',function(req,res){
        const id = req.params.id
        res.render("welcome",{
            navss:[{link:'/books',name:'Books'},
            {link:'/authors',name:'Authors'},
            {link:'/addbook',name:'Addbook'},
            {link:'/',name:'Logout'}],
            title: 'Library',
            
        });
    });
 
    return signupRouter;

}


module.exports = routerss;