var canvas=document.getElementById("mycanvas"); 
var drawcanvas=canvas.getContext("2d");
drawcanvas.beginPath();
    drawcanvas.strokeStyle = "blue";
    drawcanvas.lineWidth = 2;
    drawcanvas.arc(150, 200, 40, 0, 2 * Math.PI);
    drawcanvas.stroke();
    drawcanvas.beginPath();
    drawcanvas.strokeStyle = "black";
    drawcanvas.lineWidth = 2;
    drawcanvas.arc(250, 200, 40, 0, 2 * Math.PI);
    drawcanvas.stroke();
    drawcanvas.beginPath();
    drawcanvas.strokeStyle = "red";
    drawcanvas.lineWidth = 2;
    drawcanvas.arc(350, 200, 40, 0, 2 * Math.PI);
    drawcanvas.stroke();
    drawcanvas.beginPath();
    drawcanvas.strokeStyle = "yellow";
    drawcanvas.lineWidth = 2;
    drawcanvas.arc(200, 250, 40, 0, 2 * Math.PI);
    drawcanvas.stroke();
    drawcanvas.beginPath();
    drawcanvas.strokeStyle = "green";
    drawcanvas.lineWidth = 2;
    drawcanvas.arc(300, 250, 40, 0, 2 * Math.PI);
    drawcanvas.stroke();

    
    









