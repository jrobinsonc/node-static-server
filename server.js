var http = require('http'),
    fs = require('fs')
    url = require('url'),
    mime = require('mime');


var server = http.createServer(function (req, res) {

    var url_info = url.parse(req.url),
        file_path = 'www/' + url_info.pathname;


    fs.readFile(file_path, function (err, content) {
          
        if(!err) {
            var file_mime = mime.lookup(file_path);

            res.writeHead(200, {"Content-Type": file_mime});
            res.end(content);
        } else {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("404 Not found");
        }
          
    });
});


server.listen(process.env.PORT || 3000);
