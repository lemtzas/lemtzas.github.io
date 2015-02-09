module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "/home/lemtzas/jekyll/portfolio/assets/css/style.css": "assets/less/styles.less", // destination file and source file
          "assets/css/style.css": "assets/less/styles.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};