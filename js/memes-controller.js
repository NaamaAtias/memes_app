'use strict'

function renderImgs() {
    // getImgs()
    let strHtml = '';
    gImgs.forEach(currImg => {
        strHtml += `<img class="grid-item" src=${currImg.url} onclick="goToEditor(${currImg.id})">`
    })
    console.log(strHtml);
    document.querySelector('.grid-gallery').innerHTML = strHtml;
}

function goToEditor(imgId) {
    document.querySelector('.editor-page').hidden = false;
    document.querySelector('.gallery-page').hidden = true; 
    renderEditorPage(imgId);
    onImgClicked(imgId);
}
function goToGallery() {
    document.querySelector('.editor-page').hidden = true;
    document.querySelector('.gallery-page').hidden = false;
}

function onEditColor() {
var color = document.querySelector('.color-input').value;
gMeme.lines[0].color = color;
console.log(gMeme.lines[0].color)
renderCanvas(color,5);
}