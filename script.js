var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.scale(0.7, 0.7); // scale the canvas

//Get Fence Post based on click
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var lastMove = 0;
var P1x = 0;
var P1y = 0;
var F1x = 0;
var F1y = 0;
var F2x = 0;
var F2y = 0;
var F3x = 0;
var F3y = 0;
var end1 = 0;
var end2 = 0;
var end3 = 0;
var m1 = 0;
var m2 = 0;
var s1 = 0;
var s2 = 0;
var lastSlat1y = 0;
var lastSlat2y = 0;
var lastSlat3y = 0;
var lastSlat1x = 0;
var lastSlat2x = 0;
var lastSlat3x = 0;
var firstSlat1x = 0;
var firstSlat2x = 0;
var firstSlat3x = 0;
var firstSlat1y = 0;
var firstSlat2y = 0;
var firstSlat3y = 0;

canvas.addEventListener("click", function(evt) {
    if (lastMove < 1) {
        lastMove += 1;
        var mousePos = getMousePos(canvas, evt);
        P1x = mousePos.x;
        P1y = mousePos.y;
        console.log(lastMove);
        console.log(P1x);
        console.log(P1y);
        firstPost(P1x, P1y);
    } else if (lastMove < 2) {
        lastMove += 1;
        var mousePos = getMousePos(canvas, evt);
        P1x = mousePos.x;
        P1y = mousePos.y;
        console.log(lastMove);
        console.log(P1x);
        console.log(P1y);
        secondPost(P1x, P1y);
    } else if (lastMove < 3) {
        lastMove += 1;
        var mousePos = getMousePos(canvas, evt);
        P1x = mousePos.x;
        P1y = mousePos.y;
        console.log(lastMove);
        console.log(P1x);
        console.log(P1y);
        thirdPost(P1x, P1y);
        alert("You have your posts ready!");
    } else {
        slat1(F1x, F1y, F2x, F2y);
        slat15(F1x, F2x, end1, end2);
        slat2(m1, s1, m2, s2);
    }
}, false);

//Fence Post Drawing Functions
function firstPost() {
    end1 = P1y + 200
    context.save();
    context.beginPath(); // begin custom shape
    context.moveTo(P1x, P1y); // Left (Fence's Left) Bar
    context.lineWidth = 15;
    context.lineTo(P1x, end1);
    context.stroke(); //Draw custom shape
    F1x = P1x;
    F1y = P1y;
}

function secondPost() {
    end2 = P1y + 200
    context.beginPath(); // begin custom shape
    context.moveTo(P1x, P1y); // Fence Middle
    context.lineWidth = 15;
    context.lineTo(P1x, end2);
    context.stroke(); //Draw custom shape    
    F2x = P1x;
    F2y = P1y;
}

function thirdPost() {
    end3 = P1y + 300
    context.beginPath(); // begin custom shape
    context.moveTo(P1x, P1y); // Extreme Right (Fence's) Bar
    context.lineWidth = 15;
    context.lineTo(P1x, end3);
    context.stroke(); //Draw custom shape
    F3x = P1x;
    F3y = P1y;
}

function slat1(F1x, F1y, F2x, F2y) {
    context.beginPath(); // begin custom shape
    context.moveTo(F1x, F1y * 1.05)
    context.lineWidth = 7
    context.lineTo(F2x, F2y * 1.05)
    context.stroke(); // Draw slat1
    firstSlat1x = F1x;
    firstSlat1y = F1y * 1.05;
    firstSlat2x = F2x;
    firstSlat2y = F2y * 1.05;
}

function slat15(F1x, F2x, end1, end2) {
    context.beginPath(); // begin custom shape
    context.moveTo(F1x, end1);
    context.lineWidth = 7
    context.lineTo(F2x, end2);
    lastSlat1y = end1;
    lastSlat2y = end2;
    lastSlat3y = end3;
    context.stroke(); // Draw last slat
}

function slat2(m1, s1, m2, s2) {
    m1 = firstSlat1x;
    s1 = firstSlat2x;
    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 20));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 20));
    console.log(m2);
    console.log(s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat2

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 10));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 10));
    console.log(m2);
    console.log(s2);
    context.beginPath(); // begin custom shape
    context.lineWidth = 7;
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat3

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 6.8));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 6.8));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat4

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 5.1));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 5.1));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat5

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 4.1));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 4.1));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat6

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 3.45));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 3.45));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat7

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 2.95));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 2.95));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat8

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 2.58));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 2.58));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat9

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 2.285));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 2.285));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat10

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 2.06));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 2.06));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat11

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 1.87175));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 1.87175));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat12

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 1.7175));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 1.7175));
    console.log(m2);
    console.log(s2);
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat12




    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 1.1));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 1.1));
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat18

    m2 = ((firstSlat1y) + ((end1 - firstSlat1y) / 1.05));
    s2 = ((firstSlat2y) + ((end2 - firstSlat2y) / 1.05));
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.beginPath(); // begin custom shape
    context.moveTo(m1, m2);
    context.lineTo(s1, s2);
    context.stroke(); // Draw slat19

    //m2 = end1 - firstSlat1y / 2;
    //s2 = end2 - firstSlat2y / 2;
    //context.beginPath(); // begin custom shape
    //context.moveTo(m1, m2);
    //context.lineTo(s1, s2);
    //context.stroke(); // Draw slat1

    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 8);
    //context.lineTo(F2x, s1 = s1 * 8);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 9);
    //context.lineTo(F2x, s1 = s1 * 9);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 10);
    //context.lineTo(F2x, s1 = s1 * 10);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 11);
    //context.lineTo(F2x, s1 = s1 * 11);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 12);
    //context.lineTo(F2x, s1 = s1 * 12);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 13);
    //context.lineTo(F2x, s1 = s1 * 13);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 14);
    //context.lineTo(F2x, s1 = s1 * 14);
    //context.stroke(); // Draw slat1
    //context.beginPath(); // begin custom shape
    //context.moveTo(F1x, m1 = m1 * 15);
    //context.lineTo(F2x, s1 = s1 * 15);
    //context.stroke(); // Draw slat1
}






function postHeight() {

    function fenceDesign() {
        context.beginPath(); // begin custom shap
        context.lineWidth = 7;
        context.strokeRect(5, 40, 595, 140); //Draw rectangle  
        context.strokeRect(5, 60, 595, 100); //Draw rectangle
        context.strokeRect(5, 80, 595, 60); //Draw rectangle
        context.strokeRect(5, 100, 595, 20); //Draw rectangle
    }
    fenceDesign();
}




function postDistance() {

}


/*function draw(scale, translatePos) {
    context.translate(translatePos.x, translatePos.y);
    context.scale(scale, scale);


        context.beginPath(); // begin custom shape
        context.moveTo(-280, 0); // Rectangular Net (For Frame)
        context.lineWidth = 7;
        context.lineTo(300, 0);
        context.moveTo(-280, 20);
        context.lineTo(300, 20);
        context.moveTo(-280, 40);
        context.lineTo(300, 40);
        context.moveTo(-280, 60);
        context.lineTo(300, 60);
        context.moveTo(-280, 80);
        context.lineTo(300, 80);
        context.stroke();

    

    context.beginPath(); // begin custom shape
    context.moveTo(-140, -20); // Fence (Left) Mid
    context.lineWidth = 2;
    context.lineTo(-140, 100);
    context.stroke();

    context.beginPath(); // begin custom shape
    context.moveTo(140, -20); // Fence (Right's) Mid
    context.lineWidth = 2;
    context.lineTo(140, 100);
    context.stroke();


    context.closePath(); // complete custom shape

    context.lineWidth = 5;
    context.stroke();
    context.restore();
}

window.onload = function() {

    var translatePos = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    var scale = 0.9;
    var scaleMultiplier = 0.8;
    var startDragOffset = {};
    var mouseDown = false;

    // add button event listeners
    document.getElementById("plus").addEventListener("click", function() {
        scale /= scaleMultiplier;
        draw(scale, translatePos);
    }, false);

    document.getElementById("minus").addEventListener("click", function() {
        scale *= scaleMultiplier;
        draw(scale, translatePos);
    }, false);

    // add event listeners to handle screen drag
    canvas.addEventListener("mousedown", function(evt) {
        mouseDown = true;
        startDragOffset.x = evt.clientX - translatePos.x;
        startDragOffset.y = evt.clientY - translatePos.y;
    });

    canvas.addEventListener("mouseup", function(evt) {
        mouseDown = false;
    });

    canvas.addEventListener("mouseover", function(evt) {
        mouseDown = false;
    });

    canvas.addEventListener("mouseout", function(evt) {
        mouseDown = false;
    });

    canvas.addEventListener("mousemove", function(evt) {
        if (mouseDown) {
            translatePos.x = evt.clientX - startDragOffset.x;
            translatePos.y = evt.clientY - startDragOffset.y;
            draw(scale, translatePos);
        }
    });

    draw(scale, translatePos);
};*/