'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];
var isDrag = false;
var gStartPos;
var gCurrMeme = getMeme();

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('touchend', onUp);
}


function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos;
}


function onDown(ev) {
    const pos = getEvPos(ev);
    console.log(pos);
    console.log(gCurrMeme);
    var currTxtPos = gCurrMeme.lines[selectedLineIdx].pos;
    console.log(currTxtPos);
    var currTxtSize = gCurrMeme.lines[selectedLineIdx].size;
    if (pos.x <= currTxtPos.x + currTxtSize && pos.x >= currTxtPos.x) {
        console.log(currTxtPos);
        renderCanvas(gCurrMeme);
        gCurrMeme.lines[selectedLineIdx].pos = { x: ev.offsetX, y: ev.offsetY };
        gStartPos = pos;
        document.body.style.cursor = 'grabbing'
        isDrag = true;
    }
}

function onMove(ev) {
    if (isDrag) {
        const pos = { x: ev.offsetX, y: ev.offsetY };
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos;
        gCurrMeme.lines[selectedLineIdx].pos.x += dx;
        gCurrMeme.lines[selectedLineIdx].pos.y += dy;
    }
}

function onUp() {
    renderCanvas(gCurrMeme);
    isDrag = false;
    document.body.style.cursor = 'grab';
}