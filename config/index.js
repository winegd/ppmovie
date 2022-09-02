    proxyTable: {
        '/api': {
            // 此处的写法，目的是为了 将 /api 替换成要请求的域名
            target: 'https://www.feisuzyapi.com',
            // 允许跨域
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
