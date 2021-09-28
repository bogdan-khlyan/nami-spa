const express = require('express')
const {createProxyMiddleware} = require('http-proxy-middleware')
const app = express()


app.use('/ws', createProxyMiddleware({target: 'https://namisushi.dn.ua', changeOrigin: true, ws: true}))
app.use('/api', createProxyMiddleware({target: 'https://namisushi.dn.ua', changeOrigin: true}))
app.use('/', createProxyMiddleware({target: 'http://localhost:8080', changeOrigin: true}))



app.listen(4445, () => void console.log('start'))
