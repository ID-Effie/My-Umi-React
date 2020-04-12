export default {
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  // singular: true,    约定式路由，在 page 下面的 JS 文件都会按照文件名映射到一个路由
  routes: [{
  path: '/',
  component: './HelloWorld',
  }],
}