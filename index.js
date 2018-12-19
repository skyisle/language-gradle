'use babel'

module.exports = {
  activate() {
    require('atom-package-deps').install('language-gradle')
      .then(function() {
        console.log('All dependencies installed, good to go')
      })
  }
}
