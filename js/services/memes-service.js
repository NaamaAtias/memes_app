'use strict'

// var gKeywords = {'happy': 12,'funny puk': 1}
var imgId = 0;
var gImgs=[];

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


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your text',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function onImgClicked(img) {
    gMeme
}
