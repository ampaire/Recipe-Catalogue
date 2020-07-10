
module.exports = {
  env: {
    development: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
    test: {
      plugins: [
        'transform-es2015-modules-commonjs',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-modules-commonjs',
        'transform-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
      ],
      presets: [
        '@babel/preset-react',
      ],
    },
  },
};
