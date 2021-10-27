'use strict'
var gElCanvas;
var gCtx;

function renderEditorPage(imgId) {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
    let currImg = gImgs.find(img => imgId === img.id);
    console.log(currImg);
    var img = new Image();
    img.src = currImg.url;
    console.log(img.src);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText('Insert Text Here',50,50,'black');
    }
}

function renderCanvas(color, imgId) {
    let currImg = gImgs.find(img => imgId === img.id);
    var img = new Image();
    img.src = currImg.url;
    console.log(img.src);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText('Insert Text Here',50,50,color);
    }
}

// function resize_canvas(){
//     if (gElCanvas.width  > window.innerWidth)
//     {
//         gElCanvas.width  = window.innerWidth;
//         gElCanvas.height = gElCanvas.width;
//     }
// }
function drawText(text, x, y,color) {
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'white';
    gCtx.fillStyle = color;
    gCtx.font = '50px impact';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }

