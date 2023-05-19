// config-overrides.js文件内容： 
const { override, addPostcssPlugins } = require('customize-cra')
const path = require('path');
module.exports = override(
  config =>{
    config.resolve.alias = {
        "@": path.resolve(__dirname, "src")
    };
    return config;
},
  addPostcssPlugins([
    require('tailwindcss'),
    require('autoprefixer')
  ])
)