const http= require('http');
const fs=require('fs');
const port=3000;
const host='127.0.0.1'
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readFile('example.txt','utf-8',(err,data)=>{
            if(err){
                console.log(err);
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("Internal Server error");
            }
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("The file data is :"+data);
        })

    }else if(req.url=="/write") {
        let message="Elonmusk experiment on neuralink project of the first phase trails results on postive note";
        fs.writeFile("neuralink.txt",message,"utf-8",(err)=>{
            if(err){
                console.log(err);
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("Internal Server error");
            }
            res.writeHead(200,{'content-type':'text/plain'});
            res.end("The data has entered into file sucessfull :"+message);
        });
    }
    else{
        console.log("Something went wrong!!");
    }
}).listen(port,()=>{console.log(`The Server activated on http://${host}:${port}`)});