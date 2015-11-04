module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.initConfig({
		nodemon: {
	      dev: {
	        script: 'server.js',
	        options: {
				env: {
	        		PORT: '8181'
      			},	
      			cwd: __dirname + '/app',
			}
	      },
	      
	    }
	});
	
	grunt.registerTask('default', ['nodemon']);
};