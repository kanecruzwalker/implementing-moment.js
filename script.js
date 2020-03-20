// variable to create standard time.
var standardTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(standardTime);

// variable to create current hour  
var currentHour = parseInt(moment().format("H"));

// turn every hour block into a single variable in an object
var timeBlockElements = $(".time-block");
// object to compare current time vs blockTime
var tableVar = {
    "9":  "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "16": "",
    "17": ""
};


// for each hour block, the current hour is compared against the blocksHour
timeBlockElements.each(function () {
    //this refers to every block
    //every block creates a value number 
    //1 is the second line index of tableVar 
    var blockHour = parseInt(this.id.split("-")[1]);
    console.log(currentHour, blockHour);
    
    
    // compares blockHours to current hours and sets background colors
    // this represents the different hourly element 
    if (blockHour < currentHour) {
        $(this).addClass("past");
    }else if (blockHour === currentHour) {
        $(this).addClass("present");
    }else {
        $(this).addClass("future");
    }
    

});


// run through each block
// if click save on any block
// save text to variable
// save variable to local 
// call variable from local when page is reset 