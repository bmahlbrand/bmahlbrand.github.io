module.exports = {
    
    build: {
        js: {

            // Entry point
            src: './app/js',

            // Directory to save bundle to
            outputDir: './dist/app',

            // Name to use for bundle
            outputFile: 'app.min.js'
        },
        sass: {
            src: '',
            outputDir: '',
            outputFile: ''
        },
        html: {
            src: '',
            outputDir: './dist/',
            outputFile: ''
        }
    }
    
};
