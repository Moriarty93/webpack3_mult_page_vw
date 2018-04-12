module.exports = {
  'plugins': {
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { 
      utf8: false 
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,              // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334,            // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置著
      unitPrecision: 2,                // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',              // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'],             // 指定不转换的类名 可以用正则过滤第三方
      minPixelValue: 1,              // 小于或等于1px不转换
      mediaQuery: false             // 允许在媒体查询中转换
    },
    "postcss-viewport-units": {},
    "cssnano": {              //主要用来压缩和清理css代码，在webpack中cssnano和css-loader捆绑在一起，但也可以显示使用
      preset: "advanced",
      autoprefixer: false,          //已经集成了，关闭重复调用
      "postcss-zindex": false        // 会默认设置z-index为1，要关闭
    },
    // 'autoprefixer': {
    //   browsers: ['last 5 version']    //postcss-cssnext 已经集成
    // }
  }
};
