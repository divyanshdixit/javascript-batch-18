const date = new Date(); // creating date object using date constructor.
console.log(date);
// JavaScript will use the browser's time zone and display a date as a full text string

// class Date{ //
//     constructor(){
//         this.date 
//     }
// }

// var f = new Date() - object

// 4 ways to create date:

// new Date() - with current date and time
// new Date(year, month, day, hours, minutes, seconds, milliseconds) -
const demodate = new Date(2022, 8, 34); //
console.log(demodate);
const d2 = new Date(2022);
console.log(d2)
// new Date(milliseconds)
const d3 = new Date("2022-10-12");  // 1970 : 5:30 , 00:00
console.log(d3)
console.log(d3.setDate(31))
console.log(d3.getDay())
console.log(d3.getFullYear())
console.log(d3.getHours())
console.log(d3.getMinutes())
console.log(d3.getSeconds())
console.log(d3.getMilliseconds())
console.log(d3.getTime())
console.log(Date.now())

// console.log(new Date(1665532800000))

// new Date(date string)

// JavaScript counts months from 0 to 11:
// cannot omit month. If supply one parameter it will be treated as milliseconds.
// JavaScript Stores Dates as Milliseconds

// negative milisecond refers time in past from 1st Janurary 1970

// const d = new Date("October 13, 2014 11:13:00");

// date methods:

// getDate()- Returns the date of the month (from 1-31)
// getDay()-	Returns the day of the week (from 0-6) // 1
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
// now()	Returns the number of milliseconds since midnight Jan 1, 1970
// parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
const newDate = Date.parse('2022-01-67');
console.log(newDate)
// setDate()	Sets the date of the month of a date object, return milisecond
console.log('..',new Date().setDate(13))
// setDate() method can also be used to add days to a date
const d = new Date();
d.setDate(d.getDate() + 25);
console.log(d)

const f1 = new Date();
console.log(new Date(f1.setFullYear(2023)));


// setFullYear(2023, 9, 12)	Sets the year of a date object
// setHours()	Sets the hour of a date object
// setMilliseconds()	Sets the milliseconds of a date object
// setMinutes()	Set the minutes of a date object
// setMonth()	Sets the month of a date object
// setSeconds()	Sets the seconds of a date object
// setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970

// setFullYear() method set year, The setFullYear() method can optionally set month and day

/////-----
console.log(new Date().toDateString(), )
console.log(new Date().toTimeString(), )
console.log(new Date().toLocaleDateString(), )
console.log(new Date().toLocaleTimeString(), )
console.log(new Date().toLocaleString(), )
// toDateString()	Converts the date portion of a Date object into a readable string
// toTimeString()	Converts the time portion of a Date object to a string
// toJSON()	Returns the date as a string, formatted as a JSON date

// toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
// toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
// toLocaleString()	Converts a Date object to a string, using locale conventions

// date formats:

// (The International Standard) Date -	"2022-10-12" 
// Short Date	"10/12/2022"
// Long Date	"Oct 12 2022" or "25 Oct 2022"

// const d = new Date("2022-10-12");

// ISO dates can be written without month and day 
const d1 = new Date("2022");
console.log(d1);

// Compare Dates:

const today = new Date().getTime(); // 
console.log(today)
const yesterday = new Date().setFullYear(2022, 9, 11);
// yesterday.setFullYear(2022, 9, 11);
console.log(yesterday)
if (yesterday > today) {
  text = "Today is before ";
} else {
  text = "Today is after";
}
console.log(text)