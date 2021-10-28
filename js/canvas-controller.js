'use strict'
var gElCanvas;
var gCtx;
var gStartPos;

function renderEditorPage(imgId) {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
}

function renderCanvas(color, imgId, txt, size, x, y) {
    let currImg = gImgs.find(img => imgId === img.id);
    var img = new Image();
    img.src = currImg.url;
    console.log(img.src);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(txt, x, y, color, size);
    }
}

// function resize_canvas(){
//     if (gElCanvas.width  > window.innerWidth)
//     {
//         gElCanvas.width  = window.innerWidth;
//         gElCanvas.height = gElCanvas.width;
//     }
// }
function drawText(text, x, y, color, size) {
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'white';
    gCtx.fillStyle = color;
    gCtx.font = size + 'px impact';
    gCtx.textAlign = "center";
    gCtx.borderStyle = "black"
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
    // drawRect(x, y, size);
}

function drawRect(x, y, size) {
    gCtx.beginPath();
    gCtx.rect(x-size, y-size, 450-y, size+10);
    gCtx.strokeStyle = 'gray';

    gCtx.stroke();
}


// function getCurrText(idx) {
//     return gMeme.lines[idx].txt;
// }

// function isTxtClicked(pos) {
    
// }

// function addListeners() {
//     addMouseListeners();
//     addTouchListeners();
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!isTxtBoxClicked(pos)) return
//     gIsTxtDrag = true;
//     gStartPos = pos;
//     document.body.style.cursor = 'grabbing'
// }

// function onMove(ev) {
//     const circle = getCircle();
//     if (circle.isDrag) {
//         const pos = getEvPos(ev)
//         const dx = pos.x - gStartPos.x
//         const dy = pos.y - gStartPos.y
//         gStartPos = pos
//         moveCircle(dx, dy)
//         renderCanvas()
//     }
// }

// function onUp() {
//     setCircleDrag(false)
//     document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }
//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
//         }
//     }
//     return pos
// }

