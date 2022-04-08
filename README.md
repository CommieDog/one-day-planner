# One Day Planner
A webpage for organizing and displaying a daily work schedule


## Introduction 

The One Day Planner is a webpage used to organize and plan the current workday's activities. The page is color-coded so users can easily see where they stand on the day's schedule. The planner also has room to write notes, and these notes are stored locally so that users can return to them afterwards.

![Screencapture of planner showing data persistance.](https://github.com/CommieDog/one-day-planner/blob/main/assets/images/readme/one-day-planner-screencap.gif)

A sample deployment of the website is available on [GitHub Pages](https://commiedog.github.io/one-day-planner/).


## Table of Contents

* [Description](#description)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Future Work](#future-work)
* [Author](#author)
* [License](#license)


## Description

The static portion of the website is very simple, consisting of a header with the day's date and a space to insert hourly time block elements. The time block elements, where most of the action happens, are generated dynamically:
```JavaScript
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
```
Each time block element consists of an hour label, a text area for typing notes, and a save button. The time blocks know what time of the day they correspond to, which allows for easy time-sensitive styling to be applied to the time blocks:
```JavaScript
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
```
Thus the current time of the day can be roughly guessed just by looking at the colors of the time blocks: gray for past, red for present, and green for future.

The save button on the right end of the time block, as you might have guessed, saves the text content of the time block. The content is saved into the browser's local storage, which allows for persistence across browser sessions (and days) but not across devices.


## Features

* Dynamic layout and style that adapt to the current date and time
  * Current date display in header
  * Color coding to highlight which times are in the past, present, and future
* Ability to take notes on daily activities and events
  * Use of browser local storage to save notes


## Technologies Used

* HTML
* CSS
* JavaScript
  * jQuery
  * Moment.js


## Future Work

Currently the website stores is notes with regard to time of day, but not date; when opening the site at the beginning of a new day, the previous day's notes will remain and have to be cleared manually by the user. A user prompt to clear the notes would make the planner a bit easier to use.


## Credits

[jQuery](https://jquery.com/) used under MIT License

[Moment.js](https://momentjs.com/) used under MIT License


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)

## License
&copy; 2022 John Netzel. All Rights Reserved.