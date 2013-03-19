var css = require("stylus"), 
    str = require("fs").readFileSync(__dirname +"/test.styl", "utf8");
	
css.render(str, { filename: "test.styl" }, function(err, css) {
    if (err) throw err;
    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(css);
    }).listen(8888, '127.0.0.1');
    console.log('已经启2动 http://127.0.0.1:8888/');
});