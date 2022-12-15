//   Purpose: Interactive map by using the static image provided of the preservation
//   Authors: 
//   Zilong Wang  - functions, styling, content, structure
//   Brandon Watson - function, styling, content, structure

/*Description: This page is the js file to achieve the anticipated
result in burial information page. Visitor can click the "burial booking"
button to book burial. However, they must read the agreement of conservation 
before they continue. The agreement only occur when visitor click button.
All functions here will relate to the effect after click "burial booking"  
*/


function setup(){
    document.getElementById("agreement").style.display = "none";
}/*hide the document  */



function clickable(){
    document.getElementById("agreement").style.display = "block";
    document.getElementById("information_container").style.pointerEvents = "none";
    no_scroll();
    change_opacity();
}/* show booking aggreement, at the same time, other places are unclickable */


function no_scroll(){
    document.body.style.position = "fixed";
}/* When aggreement occur, the body's scrollbar can not be used */

function change_opacity(){
    const elements = Array.from(document.getElementsByClassName("change_part"));
    elements.forEach(box => {
      box.style.opacity = "0.3";
    });
    document.getElementById("header").style.opacity = "0.9";
}/* When aggreement occur, the opacity change */

function color_change(){
    document.getElementById("button").style.backgroundColor = "grey";
}/* When users put their cursor on "burial booking" button,
 the button color will change to grey */

function color_back(){
    document.getElementById("button").style.backgroundColor = "white";
}/* When usersmove their cursor out "burial booking" button,
 the button color will back to white */

function go_back(){
    window.location.reload();
}/* refresh the page, when user click "back" button */

function next(){
    window.location.href = "burial.html";
}/* redirct to burial booking page, when user click "I agree" button */
