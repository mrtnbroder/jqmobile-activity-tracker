test( "parseTimeTests", function() {
	ok(parseTime(0) == '00');
	ok(parseTime(7) == '07');
	ok(parseTime(100) == '100');

	ok(calcMilliseconds(0) == 0);
	ok(calcMilliseconds(60) == 6);
	ok(calcMilliseconds(123) == 12);
	ok(calcMilliseconds(1200) == 20);

	ok(calcSeconds(0) == 0);
	ok(calcSeconds(60) == 0);
	ok(calcSeconds(1234) == 1);
	ok(calcSeconds(5000) == 5);
	ok(calcSeconds(12345) == 12);
	ok(calcSeconds(60000) == 0);
	ok(calcSeconds(75000) == 15);

	ok(calcMinutes(0) == 0);
	ok(calcMinutes(60) == 0);
	ok(calcMinutes(300000) == 5);
	ok(calcMinutes(123456) == 2);
	ok(calcMinutes(3600000) == 0);
	ok(calcMinutes(4500000) == 15);

	ok(calcHours(0) == 0);
	ok(calcHours(60) == 0);
	ok(calcHours(18000000) == 5);
	ok(calcHours(12345678) == 3);
	ok(calcHours(86400000) == 0);
	ok(calcHours(140400000) == 15);	
});