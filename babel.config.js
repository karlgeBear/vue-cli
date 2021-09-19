module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["component",{  //babel-plugin-component(按需引入)的简写 
        "libraryName": "mint-ui", //针对mint-ui库实现按需引入
        "style": true  //自动打包对应的css
    }]
  ]
}
