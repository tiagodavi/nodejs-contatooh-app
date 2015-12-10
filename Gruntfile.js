module.exports = (grunt) => {

	grunt.initConfig({
		copy: {
			project: {
				expand: true,
				cwd: '.',
				src: ['**', '!Gruntfile.js', '!package.json', '!bower.json'],
				dest: 'dist'
			}
		},
		clean: {
			start: {
				src: 'dist'
			},
			end: {
				src: [
					'dist/public/js/*', 
					'dist/public/vendor', 
					'!dist/public/js/index.min.js'
				]
			}
		},
		usemin: {
			html: 'dist/app/views/**/*.ejs'
		},
		useminPrepare: {
			options: {
				root: 'dist/public',
				dest: 'dist/public'
			},
			html: 'dist/app/views/**/*.ejs'
		},
		ngAnnotate:{
			scripts: {
				expand: true,
				src: ['dist/public/js/**/*.js']
			}
		}
	})

	grunt.registerTask('default', ['start', 'minify', 'end'])
	grunt.registerTask('start', ['clean:start', 'copy'])
	grunt.registerTask('minify', 
		['useminPrepare', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'usemin']
	)
	grunt.registerTask('end', ['clean:end'])

	var load = [
		'grunt-contrib-copy',
		'grunt-contrib-clean',
		'grunt-contrib-concat',
		'grunt-contrib-uglify',
		'grunt-contrib-cssmin',
		'grunt-usemin',
		'grunt-ng-annotate'
	]

	for(task of load){
		grunt.loadNpmTasks(task)
	}
}