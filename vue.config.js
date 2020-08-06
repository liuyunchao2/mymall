module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asserts': '@/asserts',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  }
};
