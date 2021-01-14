module.exports = {
    publicPath:'./',
    lintOnSave: false,
    devServer: {
        host:'localhost',
        port:'8080',
        proxy: {
           '/api': {
                //target: 'http://10.124.193.151:8082',
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/api': '/api' }
            },
        }
    }
}