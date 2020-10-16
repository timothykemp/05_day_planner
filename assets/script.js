$(document).ready(function () {

    var todayDayName = moment().format('dddd');
    var todayMonthName = moment().format('MMMM');
    var todayDayNum = moment().format('Do');
    var todayText = todayDayName + ', ' + todayMonthName + ' ' + todayDayNum;

    $('#currentDay').text(todayText)


    var timeBlockList = [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM"
    ];

    for (var i = 0; i < timeBlockList.length; i++) {


        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var timeBlock = $("<div>");
        var hour = $("<div>");
        var textArea = $("<textarea>");
        var saveButton = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        timeBlock.addClass("row time-block");
        hour.addClass("col-2 hour").attr("style", "padding-top: 10px");
        textArea.addClass("col-8");
        saveButton.addClass("col-2 saveBtn")
            .html('<i class="fas fa - save"></i>');


        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        timeBlock.attr("time-block", timeBlockList[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        hour.text(timeBlockList[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $(timeBlock).append(hour);
        $(timeBlock).append(textArea);
        $(timeBlock).append(saveButton);
        $(".container").append(timeBlock);

    }

})