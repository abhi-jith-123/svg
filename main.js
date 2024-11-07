// var canvas=document.getElementById("myCanvas");
//     var ctx=canvas.getContext("2d");
//     const canvasDownload=document.getElementById("canvasDownload")

//     var grd=ctx.createLinearGradient(0,0,200,0)
//     grd.addColorStop(0,"green");
//     grd.addColorStop(1,"blue");

//     ctx.fillStyle=grd;
//     ctx.fillRect(10,10,150,80);
//     const pngDataUrl=canvas.toDataURL("image/png")
//     canvasDownload.href=pngDataUrl;
    
var canvas=document.getElementById("myCanvas");
 var ctx=canvas.getContext("2d");
 const canvasDownload=document.getElementById("canvasDownload")

var grd=ctx.createLinearGradient(0,0,200,0)
    grd.addColorStop(0,"green");
    grd.addColorStop(1,"blue");

ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);
    const pngDataUrl=canvas.toDataURL("image/png")
    canvasDownload.href=pngDataUrl;