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


function renderImgs() {
    // getImgs()
    let strHtml = '';
    gImgs.forEach(currImg => {
        strHtml += `<img class="grid-item" src=${currImg.url}>`
    })
    console.log(strHtml);
    document.querySelector('.grid-gallery').innerHTML = strHtml;
}


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}
