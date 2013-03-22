$(document).on("pageinit", function(event){
	var activity_start = new Date() - 4980000;  // some date
	displayCounter(activity_start);
});

function displayCounter(activity_start)
{
	var activity_now = new Date();
	var activity_time = Math.abs(activity_now - activity_start);

	activity_hours = parseTime(calcHours(activity_time));
	activity_minutes = parseTime(calcMinutes(activity_time));
	activity_seconds = parseTime(calcSeconds(activity_time));
	activity_milliseconds = parseTime(calcMilliseconds(activity_time));

	$('.activity_counter.js .activity_hours').text(activity_hours);
	$('.activity_counter.js .activity_minutes').text(activity_minutes);
	$('.activity_counter.js .activity_seconds').text(activity_seconds);
	$('.activity_counter.js .activity_milliseconds span').text(activity_milliseconds);
	console.log(activity_hours + ' ' + activity_minutes + ' ' + activity_seconds + ' ' + activity_milliseconds);
	setTimeout(function() {displayCounter(activity_start);}, 10);
}

function parseTime(num)
{
	if(num < 10)
		return '0' + num;
	
	return num;
}

function calcHours(activity_time)
{
	return parseInt(activity_time/(1000*60*60)%24);
}

function calcMinutes(activity_time)
{
	return parseInt(activity_time/(1000*60))%60;
}

function calcSeconds(activity_time)
{
	return parseInt(activity_time/1000)%60;
}

function calcMilliseconds(activity_time) 
{
	return parseInt(activity_time/10)%100;	
}