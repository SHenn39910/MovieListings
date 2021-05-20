const { Module } = require("webpack");

Module.exports = {
    module: {
        rules:[
            {
                test: "/\.js$/",
                exclude:
"/node_modules/",
                use: {
loader: '"babel-loader',
                },

            },
        ],
    },
}