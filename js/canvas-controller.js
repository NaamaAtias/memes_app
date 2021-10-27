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
    }
    drawText('your text', 10, 50);
}

drawText('your text', 10, 50);
function drawText(text, x, y) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
  
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '40px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }