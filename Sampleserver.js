 let http=require('http')
  function hello(req,res){
    console.log(`request received`)
    res.end('Hello my first server')
  }
  http.createServer(hello).listen(8000)
 console.log(`server started`)