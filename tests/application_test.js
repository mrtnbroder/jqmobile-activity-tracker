test( "parseTimeTests", function() {
	ok(parseTime(0) == '00');
	ok(parseTime(7) == '07');
	ok(parseTime(100) == '100');
});