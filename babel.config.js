module.exports = function(api) {
  api.cache(true)

  const rootImportOpts = {
    paths: [
      {
        root: __dirname,
        rootPathPrefix: '@/',
        rootPathSuffix: 'src',
      }
    ]
  };

  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-syntax-dynamic-import',
      ['babel-plugin-root-import', rootImportOpts]
    ]
  }
}
