var css = require("stylus"), 
    fs = require("fs"),
    str = require("fs").readFileSync(__dirname +"/test.styl", "utf8");
	
css.render(str, { filename: "test.styl" }, function(err, css) {
    if (err) throw err;
    //写入css文件
	fs.open("test.css","w",0644,function(e,fd){
      if(e) throw e;
      fs.write(fd,css,0,'utf8',function(e){
        if(e) throw e;
        fs.closeSync(fd);
      });
    });
	
	//创建http
	var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(css);
    }).listen(3000, '127.0.0.1');
    console.log('已经启动 http://127.0.0.1:3000/');
});