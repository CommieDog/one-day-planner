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
    timeblocks.append($("<p>").addClass("col-1 hour").text("A"));
    timeblocks.append($("<textarea>").addClass("col-10"));
    timeblocks.append($("<button>").addClass("col-1 saveBtn").html("<i>💾</i>"));

    // Set the proper time value for each timeblock
    $(".hour").each(function(_i, el)
    {
        el = $(el);
        var timeLabel = el.parent().data("startingHour");
        timeLabel = moment().startOf("day").add(timeLabel, "hours");
        timeLabel = timeLabel.format("h A");
        el.text(timeLabel);
    });

    var currentHour = moment().startOf("hour")
    // Set the proper time class value for each timeblock
    $(".time-block textarea").each(function(_i, el)
    {
        el = $(el);
        var timeValue = el.parent().data("startingHour");
        timeValue = moment().startOf("day").add(timeValue, "hours");
        if(currentHour.isAfter(timeValue))
        {
            timeValue = "past";
        }
        else if(currentHour.isBefore(timeValue))
        {
            timeValue = "future";
        }
        else
        {
            timeValue = "present";
        }
        el.addClass(timeValue);
    });
}

timeblocksEl.on("click", "button", function(event)
{
    var startingHour = $(this).parent().data("startingHour");
    var textToSave = $(this).siblings("textarea").val();
    window.localStorage.setItem("OneDayPlanner:" + startingHour, textToSave);
});

createTimeblocks();