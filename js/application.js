/* 
	jQuery Mobile Boilerplate
	application.js
*/
$(document).on("pageinit", function(event){

	var activity_start = new Date() - 4980000;  // some date

	function parseTime($num)
	{
		if($num < 10) return '0' + $num;
		return $num;
	}

	(function(){
		var activity_now = new Date();
		var activity_time = Math.abs(activity_now - activity_start);

		activity_hours = parseTime(parseInt(activity_time/(1000*60*60))%24);
		activity_minutes = parseTime(parseInt(activity_time/(1000*60))%60);
		activity_seconds = parseTime(parseInt(activity_time/1000)%60);
		activity_milliseconds = parseTime(parseInt(activity_time/10)%60);

		$('.activity_hours').text(activity_hours);
		$('.activity_minutes').text(activity_minutes);
		$('.activity_seconds').text(activity_seconds);
		$('.activity_milliseconds span').text(activity_milliseconds);
		// console.log(activity_hours + ' ' + activity_minutes + ' ' + activity_seconds + ' ' + activity_milliseconds);
		setTimeout(arguments.callee, 10);
	})();

});