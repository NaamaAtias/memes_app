'use strict'

function renderImgs() {
    const imgs = getImgs();
    let strHtml = '';
    imgs.forEach(currImg => {
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
    updateColor(color);
}

function onEditText() {
    var txt = document.querySelector('.text-input').value;
    updateTxt(txt);
}

function onBiggerSize() {
    var diff = 5;
    updateTxtSize(diff)
}

function onSmallerSize() {
    var diff = -5;
    updateTxtSize(diff)
}

function onMoveTxtUp() {
    var diff = -5;
    updateTxtPos(diff);
}

function onMoveTxtDown() {
    var diff = 5;
    updateTxtPos(diff);
}

function onAlignRight() {
    
}