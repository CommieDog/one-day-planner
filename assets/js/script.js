const currentDayEl = $("#currentDay");
const timeblocksEl = $("#timeblocks");

currentDayEl.text(moment().format("dddd, MMMM Do, YYYY"));

function createTimeblocks()
{
    for(var i = 9; i <= 17; i++) // Iterate through the hours of the workday
    {
        var timeblock = $("<div>"); // Create new <div>
        timeblock.addClass("time-block");
        timeblock.data("startingHour", i);
        timeblocksEl.append(timeblock);
    }
    var timeblocks = $(".time-block"); // Select all timeblocks
    timeblocks.append($("<p>").text("A"));
    timeblocks.append($("<textarea>"));
}

createTimeblocks();