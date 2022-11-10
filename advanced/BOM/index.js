// browser 

var t = 10;
function hj(){

}
var obj = {

}
console.log(hj())
// console.log(window.hj())
console.log(t)
// console.log(window.t)

// global variable are props to window object
// global functions are methods to window object

// window size: innerHeight, innerWidth, 
// outerWidth, outerHeight => size of browser window (including toolbars/scrollbars)

// window.close() => close current window 
// window.open('url', name=target, spec (scrollbars, width, height, left, top, toolbar)) => open a new window.
// window.moveTo(x,y) => move to specified postion => x => horizontal, y - vertical
// window.resizeTo(width, height) => reszies window to new height and width

// window.screen => contains info about user's screeen.


// window.location => 
// current page url, 
// redirection

// window.location.href => return the url of current page.
// window.location.hostname => retunr domain name
// window.location.pathname => retunr pathname or filename
// window.location.protocol => return the erb based protocol
// window.location.assign(newUrl) => loads new document
// window.location.replace(newUrl) => current page will not be saved in session history  , you can not go back to previous url. 
// window.location.port => reutnr the port number (80 for http, 443 for https)
// window.location.reload() => refersh the page.
// location.toString()
// location.search => get query params '?q=1'

// parsing : tomorrow 
let params = new URLSearchParams(location.search)
let res = parseInt(params.get('q')) // string
// history => object:

// window.history => browser history

// history.back() => load previous url in history list
// history.forward()
// history.go(-1)
// history.pushState(state:object, title:'document.title', url ) => add a new entry to browser session history;

// query parameters:
const url = new URL(location);
console.log(url);

url.searchParams.set('q', 'query');

// window.navigator: contains info abt users' browser

navigator.appName
// navigator.platform
// navigator.online => check if broser is online or not;
