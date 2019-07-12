





http.createServer(function(req,res){
    fs.readFile(`hello.html`,function(error,hoy){
        if(error){

        }else{
            res.write(hoy)
            res.end()
    }
})
}).listen(8000)