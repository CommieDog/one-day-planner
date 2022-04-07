const currentDayEl = $("#currentDay");
const timeblocksEl = $("#timeblocks");

currentDayEl.text(moment().format("dddd, MMMM Do, YYYY"));

function createTimeblocks()
{
    for(var i = 9; i <= 17; i++) // Iterate through the hours of the workday
    {
        var timeblock = $("<div>"); // Create new <div>
        var timeblockP = $("<p>");
        timeblockP.text(i);
        timeblock.append(timeblockP);
        timeblocksEl.append(timeblock);
    }
}

createTimeblocks();