module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      files:["js/scripts.js"], //set up jshint (hinting javascript) on target file
      options: {
        force:true, //do not abort due to errors
        globals: {
          jquery:true //accept jquery globals
        }
      }
    },

    uglify: {
      options: {
        mangle: false //name mingling disabled
      },
      target: {
        files: {
          'js/bundle.min.js': ['js/jquery.min.js','js/bootstrap.min.js','js/masonry.pkgd.min.js','js/scripts.js', 'js/TweenMax.min.js', 'js/ScrollToPlugin.min.js'] //create bundle.min.js from source files
        }
      }  
    },

    sass: {                           
        dist: {                          
          options: {                       
            style: 'expanded'
          },
          files: {                         
            'css/style.css': 'sass/import.scss'
          }
        }
      },

      autoprefixer: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
        },
        single_file: {
          src: 'css/style.css',
          dest: 'css/style.css'
        } 
      },

      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
             files: {
              'css/bundle.min.css': ['css/bootstrap.min.css','css/style.css'] //create bundle.min.css from source css files
            }
        }
      },
      
      watch: {
        css: {
          files: ['sass/*.scss'] , //if any files scss files changed in sass folder
          tasks: ['css'] //run css task
        },
        scripts: {
          files: ['js/scripts.js'],//any js files changed in js folder
          tasks:['jshint','uglify'] //run jshint and uglify
        }

      }
    });

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('css', ['sass','autoprefixer','cssmin']);
grunt.registerTask('default', ['jshint','css']);
};