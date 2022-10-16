/*
DOM - DOCUMENT OBJECT MODEL
w3c standard:
html dom
xml dom => xml
core dom -> any type of document
using it, js can chnage & access all the elements of html Dom
when web page is loaded, browser create a dom of the page (as tree of objects)
                        WINDOW (main parent)
                            DOCUMENT (object)
                            HTML(ROOT) 
                HEAD                        BODY
                TITLE                    DIV                <a>
                TEXT (TextNode)          P         H1     HREF(ATTRIBUTE)   TEXT
                                        TEXT      TEXT
<h1> asdasddsadsa </h1>

js can create dynamic html using dom:
change html element 
        html attributes
        css 
    add new html element 
    react to html event 
    add new html event 

html dom methods are 'actions' we can perform on html elements.

html dom props are 'value' of html element that we set or get.

in DOM HTML element are defined as objects
document.getElementById('para').innerHTML = "value" (set a value)
clg(document.getElementById('para').innerHTML) => (get value of html element)

DOM Document:
var obj = {
    prop1:{}
    prop2:''
}
document object is the owner of all other object.
document objectct represent web page.

// finding  html element:-
// ==== return HTMLCollection[]
1- by id :- getElementById
if element is found, method will return element as an object, else null.
2- by className: getElementsByClassName
if elements is found, method will return all founded elements in an HTML COLLECTION ARRAY (as an object)
3- by tagName: getElementsByTagName
if elements is found, method will return all founded elements in an HTML COLLECTION ARRAY (as an object)

// ===== return NodeList as result
4- by name(dom node): getElementsByName

5- by css selectors (query selector) (. , #)
6- by html object collection

// 2- Changing html content:
    1- innerHTML : <i>heading</i>
    2- innerTEXT : 
    3- attribute: setAttribute(), getAttribute('class'), hasAttribute('id')
    
3- Using event with dom (html event, html dom event , addEventListener)
// event are generated by brower
<button onclick="myfunction(this)"> Click </button>
function myfunction(){
    //code
}
// assign events using html dom:(assign event using js )
<button id="btn"> Click me </button>
document.getElementById('btn').onclick = clickFunction
function clickFunction(){
}
//addEventListener("event", function(listener), useCapture(true,false))
// attaches an event handler on html elemnt
// this method attach event handler wihtout overwriding existing event handlers
// when we want to use event Capturing
// event listener can add to any DOM object not only html event (window object)
EVENT NAME:
onload, onunload
body, 
onload => user enter the page
onunload => when user leaves the page
onchange
onmouseover, onmouseout, onmousedown(moouse just click), onmouseup(mouse release), onclick(mouse click is completed)
onmousemove
onfocus
onblur
onsubmit (form submit, )
contextmenu 
copy
dblclick
focusin
focusout
keydown
keyup
keypress
mousemove
search (input type="search")
select 
submit
offline
online
animationstart
animationend
animationiteration
drag event 
*/