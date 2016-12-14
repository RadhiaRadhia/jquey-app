module.exports = function(grunt) {
    //tasks loadings
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-contrib-watch");
    //grunt configuration
    grunt.initConfig({

        //begin tasks declarations



        watch: {

            script: {
                file: ['scr/js/app.js'],
                Task: ['jshint'],

            }
        }
    });


    grunt.regesterTasks('default', ['watch']);
};