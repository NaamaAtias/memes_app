'use strict'

// var gKeywords = {'happy': 12,'funny puk': 1}
var imgId = 0;
var gImgs=[];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your text',
            size: 50,
            align: 'left',
            color: 'red',
            pos: {x:225, y:50}
        },
        
        {
            txt: 'Enter your text',
            size: 50,
            align: 'left',
            color: 'red',
            pos: {x:225, y:50}
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

function onImgClicked(imgId) {
    gMeme.selectedImgId = imgId;
    gMeme.lines[0].color = 'black';
    gMeme.lines[0].txt = 'Enter your text';
    gMeme.lines[0].size = 50;
    renderCanvas(gMeme.lines[0].color,gMeme.selectedImgId,gMeme.lines[0].txt, gMeme.lines[0].size, gMeme.lines[0].pos.x,gMeme.lines[0].pos.y);

}

function updateColor(color) {
    gMeme.lines[0].color = color;
    renderCanvas(gMeme.lines[0].color,gMeme.selectedImgId,gMeme.lines[0].txt, gMeme.lines[0].size, gMeme.lines[0].pos.x,gMeme.lines[0].pos.y);
}

function updateTxt(txt) {
gMeme.lines[0].txt = txt;
renderCanvas(gMeme.lines[0].color,gMeme.selectedImgId,gMeme.lines[0].txt, gMeme.lines[0].size, gMeme.lines[0].pos.x,gMeme.lines[0].pos.y);
}

function updateTxtSize(diff) {
    gMeme.lines[0].size += diff;
    renderCanvas(gMeme.lines[0].color,gMeme.selectedImgId,gMeme.lines[0].txt, gMeme.lines[0].size, gMeme.lines[0].pos.x,gMeme.lines[0].pos.y);

}
function updateTxtPos(diff) {
    gMeme.lines[0].pos.y += diff;
    renderCanvas(gMeme.lines[0].color,gMeme.selectedImgId,gMeme.lines[0].txt, gMeme.lines[0].size, gMeme.lines[0].pos.x,gMeme.lines[0].pos.y);

}

