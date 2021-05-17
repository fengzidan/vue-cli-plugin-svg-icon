module.exports = (api, options) => {
  api.render('./template', {
    ...options
  })
  api.injectImports(api.entryFile, `import './icon'`)
  api.extendPackage({
    dependencies: {
      "svg-sprite-loader": "^6.0.6"
    }
  })
}