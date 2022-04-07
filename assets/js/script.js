const currentDayEl = $("#currentDay");
const timeblocksEl = $("#timeblocks");

currentDayEl.text(moment().format("dddd, MMMM Do, YYYY"));

function createTimeblocks()
{
    for(var i = 9; i <= 17; i++) // Iterate through the hours of the workday
    {
        var timeblock = $("<div>"); // Create new <div>
        timeblock.addClass("row time-block");
        timeblock.data("startingHour", i);
        timeblocksEl.append(timeblock);
    }
    var timeblocks = $(".time-block"); // Select all timeblocks
    timeblocks.append($("<p>").addClass("col-1").text("A"));
    timeblocks.append($("<textarea>").addClass("col-10"));
    timeblocks.append($("<button>").addClass("col-1 saveBtn").text("Save"));
}

createTimeblocks();