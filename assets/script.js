var todayDayName = moment().format('dddd');
var todayMonthName = moment().format('MMMM');
var todayDayNum = moment().format('Do');
var todayText = todayDayName + ', ' + todayMonthName + ' ' + todayDayNum;

$('#currentDay').text(todayText)