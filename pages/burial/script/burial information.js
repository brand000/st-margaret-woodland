
function setup(){
    document.getElementById("agreement").style.display = "none";
}

function clickable(){
    document.getElementById("agreement").style.display = "block";
    document.getElementById("information_container").style.pointerEvents = "none";
    no_scroll();
    change_opacity();
}

function no_scroll(){
    document.body.style.position = "fixed";
}

function change_opacity(){
    const elements = Array.from(document.getElementsByClassName("change_part"));
    elements.forEach(box => {
      box.style.opacity = "0.3";
    });
    document.getElementById("header").style.opacity = "0.9";
}

function color_change(){
    document.getElementById("button").style.backgroundColor = "grey";
}

function color_back(){
    document.getElementById("button").style.backgroundColor = "white";
}

function go_back(){
    window.location.reload();
}

function next(){
    window.location.href = "burial.html";
}