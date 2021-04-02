const express=require('express');
const bodyparser=require('body-parser');
const request=require('request');

const { response } = require('express');
var app = express();
app.use(bodyparser.urlencoded({extended:true})) 

app.use(express.static("public"))
app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html")
})
app.post("/",function(request,response){
    var firstname=request.body.fname;
    var lastname=request.body.lname;
    var email=request.body.email;
    response.sendFile(__dirname+"/index1.html")
    // console.log("name is: " + firstname +  + "lastame is: " + lastname +  " email is: " + email);
})
// app.post("/",function(request,response){
//     response.sendFile(__dirname + "/success.html"); 

// })
app.listen(3000,function(){ 
    console.log("server is running in 3000 port");
})  
    
