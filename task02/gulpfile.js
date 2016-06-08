
var gulp = require('gulp');
var posthtml = require('gulp-posthtml');

var plugin = function(tree) {

	var patterns = {
		dataJs : /^js-/i,
		bootstrap : /^col-(xs|sm|md|lg)(-push|-pull|-offset)?-([1-9]|1[0-2])$/i
	};

	tree.match({attrs : {class : true}}, function(node) {

		var classes = node.attrs.class.split(' '), newClasses = [], dataJs = [];

		classes.forEach(function(item, i) {
			if(item.search(patterns.dataJs) !== -1) dataJs.push(item.replace(patterns.dataJs, ''));
			else if(item.search(patterns.bootstrap) === -1) newClasses.push(item);
		});

		node.attrs.class = newClasses.join(' ');
		if(dataJs.length) node.attrs['data-js'] = dataJs.join(' ');

		return node;

	});

};

gulp.task('default', function() {

	return gulp.src('./src/index.html')
	.pipe(posthtml([plugin]))
    .pipe(gulp.dest('./build/'));

});