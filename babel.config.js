module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "cwd": "babelrc",
        "root": "src",
        "extensions": [".js", ".ios.js", ".android.js"],
        "alias": {
          "_assets": "./src/assets",  
          "_icons":'./src/assets/icons',
          "_images":'./src/assets/images',
          "_vectors":'./src/assets/vectors',
          "_components": "./src/components",
          "_routes": "./src/routes",
          "_scenes": "./src/scenes",
          "_redux": "./src/redux",
          "_styles": "./src/styles",
          "_utils": "./src/utils"
        }
      }
    ]
  ],
};
