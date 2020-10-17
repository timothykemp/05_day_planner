$(document).ready(function () {

    var todayDayName = moment().format('dddd');
    var todayMonthName = moment().format('MMMM');
    var todayDayNum = moment().format('Do');
    var todayText = todayDayName + ', ' + todayMonthName + ' ' + todayDayNum;

    $('#currentDay').text(todayText)

    var hoursPerDay = 9;
    var time12 = [];
    var time24 = [];
    var currentHour = moment().format('H');

    function timeEl() {
        var formatTime12;
        var formatTime24;

        for (i = 9; i < hoursPerDay + 9; i++) {

            formatTime12 = (moment()
                .startOf("day")
                .add(i, "hours"))
                .format("h A");

            formatTime24 = (moment()
                .startOf("day")
                .add(i, "hours"))
                .format("HH");

            time12.push(formatTime12);
            time24.push(formatTime24);
        }
    }

    timeEl();


    for (var i = 0; i < time12.length; i++) {

        var timeBlock = $("<div>");
        var hour = $("<div>");
        var textArea = $("<textarea>");
        var saveButton = $("<button>");
        var icon = $("<li>");

        if (currentHour === time24[i]) {
            textArea.addClass("present");
        }

        if (currentHour > time24[i]) {
            textArea.addClass("past");
        }

        if (currentHour < time24[i]) {
            textArea.addClass("future");
        }

        // 3. Then give each "letterBtn" the following classes: "letter-button"
        timeBlock
            .addClass("row time-block")
            .attr("time-block", time12[i]);
        hour
            .addClass("col-2 hour")
            .attr("style", "padding-top: 2rem")
            .text(time12[i]);
        textArea
            .addClass("col-8");
        saveButton
            .addClass("col-2 saveBtn");
        icon
            .html('<i class="far fa-save fa-lg"></i>')
            .attr("style", "list-style-type:none");

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $(timeBlock).append(hour);
        $(timeBlock).append(textArea);
        $(timeBlock).append(saveButton);
        $(saveButton).append(icon);
        $(".container").append(timeBlock);

    }

})