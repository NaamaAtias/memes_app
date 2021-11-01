'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];
var isDrag = false;
var gStartPos;
var gCurrMeme = getMeme();

function addListeners() {
    addMouseListeners();
    addTouchListeners();
    // window.addEventListener('resize', () => {
    //     resizeCanvas();
    //     renderCanvas(gCurrMeme);
    // })
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
    console.log(pos)
    const lines = gCurrMeme.lines;
    // let txt = gCtx.measureText(lines[0].txt);
    // let width = txt.width;
    // console.log(width);
    let currLineIdx = lines.findIndex(line => (pos.y >= line.pos.y - line.size+10) && (pos.y <= line.pos.y) && (pos.x >= line.pos.x-line.width/2) && (pos.x <= line.pos.x + line.width/2));
    onTextClicked(currLineIdx);
    var currTxtPos = gCurrMeme.lines[currLineIdx].pos;
    console.log(currTxtPos);
    var currTxtSize = gCurrMeme.lines[currLineIdx].size;
    if (pos.y >= currTxtPos.y - currTxtSize && pos.y <= currTxtPos.y) {
        renderCanvas(gCurrMeme);
        currTxtPos = { x: currTxtPos.x-ev.offsetX, y: ev.offsetY };
        gStartPos = pos;
        document.body.style.cursor = 'grabbing'
        isDrag = true;
    }
}

function onMove(ev) {
    if (isDrag) {
        const pos = getEvPos(ev);
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos;
        gCurrMeme.lines[gCurrMeme.selectedLineIdx].pos.x += dx;
        gCurrMeme.lines[gCurrMeme.selectedLineIdx].pos.y += dy;
        renderCanvas(gCurrMeme);
    }
}

function onUp() {
    renderCanvas(gCurrMeme);
    isDrag = false;
    document.body.style.cursor = 'grab';
}