const http = require('http')

http.createServer(function (req, res) {
	res.write('Kontol Bapak Kau Pecah!')
	res.end()
}).listen(8080)