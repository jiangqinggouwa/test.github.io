const path = require("path");
module.exports = {
    mode:"development",
    entry:"./src/index.tsx",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist/"),
    },
    devtool:"source-map",
    resolve:{
        extensions:[".ts",".tsx",".js","json"]
    },
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                use:["awesome-typescript-loader"],
                exclude:/node_modules/
            },   
            
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"},
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,"dist/"),
        publicPath:"http://localhost:3000/dist/",
        port:3000
    },
   /* plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]*/
}