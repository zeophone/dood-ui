var path = require("path");
module.exports={
    entry:'./index.js',
    output: {
        filename: 'common.js',
        path: path.resolve(__dirname, 'js')
    },
    mode:'development',//'production',//'development',
    devServer:{
        publicPath : './js',
    }
}