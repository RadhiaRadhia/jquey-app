module.exports = function(grunt) {
    //tasks loadings
    grunt.loadNPMTasks('grunt-contribut-jshint')
    grunt.loadNPMTasks("grunt-contribut-watch")
        //grunt configuration
    grunt.initConfig({

        //begin tasks declarations



        watch: {

            script: {
                files: [''],
                Task: ['']

            }
        }
    });


    grunt.regesterTasks('default', ['watch']);
};