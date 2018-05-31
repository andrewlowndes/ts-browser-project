System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  map: {
    'ts-lib-project': 'npm:ts-lib-project/lib/index.umd.js' //can use the umd or just index.js if we can want better dev for the module itself
  }
});
