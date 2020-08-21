var  gulp=require('gulp');
var  sass=require('gulp-sass');
var  watch=require('gulp-watch');
//创建任务将sass转化为css
gulp.task('sass',function(){
    return gulp.src('./sass/*.scss').pipe(sass()).pipe(gulp.dest('./css/'))
})
//创建监听 
gulp.task('watch-sass',function(done){
    watch('./sass/*scss',gulp.parallel('sass'))
    done()
});