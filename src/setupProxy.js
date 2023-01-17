const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/cube', {
            target: 'http://localhost:8000',
            changeOrigin: true
        })
    )

    app.use('/2048', {
        target: 'http://localhost:8000',
        changeOrigin: true
    })
}