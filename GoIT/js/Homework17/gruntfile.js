module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['script/backup/*.js'],
                // the location of the resulting JS file
                dest: 'script/main.script.js'
            }
        },

        uglify: {
            build: {
                src: 'script/main.script.js',
                dest: 'script/main.script.min.js'
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-watch');

   // grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['concat', 'uglify']);

};