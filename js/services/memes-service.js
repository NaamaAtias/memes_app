'use strict'

// var gKeywords = {'happy': 12,'funny puk': 1}
var imgId = 1;
var gImgs = createImgs();

function createImgs() {
    gImgs = [
        {id: imgId++, url:`img/memes-square/${imgId}.jpg`, keywords: []}
    ]
}

function renderImgs() {

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
