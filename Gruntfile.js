module.exports = function(grunt) {
    //1.引入
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: '*.js',
                    dest: './dist/'
                }]
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8', //设置兼容模式 
                noAdvanced: true //取消高级特性 
            },
            minify: {
                expand: true,
                cwd: './css',
                src: ['*.css', '!*.min.css'], //.css文件，但不包括.min.css文件
                dest: 'dist',
                ext: '.css'
            }
        },
        htmlmin: {
            options: {
                removeComments: true, // 去除注释信息 
                collapseWhitespace: true, // 去除空白字符  
                removeEmptyAttributes: true, // 去除标签的空属性
                removeCommentsFromCDATA: true, // 去除 CDATA 的注释信息
                removeRedundantAttributes: true // 去除标签的冗余属性
            },
            // 具体任务配置
            build: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: '*.html',
                    dest: 'dist'
                }]
            }
        }






    });
    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
}