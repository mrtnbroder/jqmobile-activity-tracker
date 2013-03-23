$(document).on("pageinit", function(event){
	var activity_start = new Date() - 4980000;  // some date
	displayCounter(activity_start);
});

function displayCounter(activity_start)
{
	var activity_time = Math.abs(new Date() - activity_start);

	$('.activity_counter.js .activity_hours').text(parseTime(calcHours(activity_time)));
	$('.activity_counter.js .activity_minutes').text(parseTime(calcMinutes(activity_time)));
	$('.activity_counter.js .activity_seconds').text(parseTime(calcSeconds(activity_time)));
	$('.activity_counter.js .activity_milliseconds span').text(parseTime(calcMilliseconds(activity_time)));

    setTimeout(function() {displayCounter(activity_start);}, 10); }

function getTime() 
{
	return new Date();
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