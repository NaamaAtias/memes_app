'use strict'

var imgId = 0;
var gImgs = [];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your text',
            size: 35,
            align: 'center',
            color: 'black',
            pos: { x: 175, y: 35 },
            font: 'Impact',
            width: 292.9443359375
        },

        {
            txt: 'Enter your text',
            size: 35,
            align: 'center',
            color: 'black',
            pos: { x: 175, y: 330 },
            font: 'Impact',
            width: 292.9443359375
        }
    ]
}

var gIsTxtDrag = false;

function createImgs() {
    for (var i = 0; i < 18; i++) {
        gImgs.push(createImg());
    }
    console.log(gImgs);
}

function createImg() {
    const currImg = { id: ++imgId, url: `img/memes-square/${imgId}.jpg`, keywords: [] };
    return currImg;
}

function getImgs() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function onImgClicked(imgId) {
    gMeme.selectedImgId = imgId;
    renderCanvas(gMeme);
}

function updateLineIdx(idx) {
    gMeme.selectedLineIdx = idx;
    renderCanvas(gMeme);

}

function updateTxt(txt, idx, width) {
    gMeme.lines[idx].txt = txt;
    gMeme.lines[idx].width = width;
    renderCanvas(gMeme);
    console.log(gMeme);
}

function updateTxtSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    renderCanvas(gMeme);

}
function updateTxtPos(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += diff;
    renderCanvas(gMeme);

}

function updateTxtFont(selectedFont) {
    gMeme.lines[gMeme.selectedLineIdx].font = selectedFont;
    renderCanvas(gMeme);
}

function updateColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
    renderCanvas(gMeme);
}

function toggleLines() {
    let tempPos = gMeme.lines[0].pos;
    gMeme.lines[0].pos = gMeme.lines[1].pos;
    gMeme.lines[1].pos = tempPos;
    renderCanvas(gMeme);

}

function updateTxtAlignment(align, x) {
    gMeme.lines[gMeme.selectedLineIdx].align = align;
    gMeme.lines[gMeme.selectedLineIdx].pos.x = x;
    renderCanvas(gMeme);
}

function updateTxtWidth(idx, txtWidth) {
    gMeme.lines[idx].width = txtWidth;
    renderCanvas(gMeme);
}

