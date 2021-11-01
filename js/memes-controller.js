'use strict'

function renderImgs() {
    const imgs = getImgs();
    let strHtml = '';
    imgs.forEach(currImg => {
        strHtml += `<img class="grid-item" src=${currImg.url} onclick="goToEditor(${currImg.id})">`
    })
    document.querySelector('.grid-gallery').innerHTML = strHtml;
}

function goToEditor(imgId) {
    document.querySelector('.editor-page').style.display = 'flex';
    document.querySelector('.gallery-page').hidden = true;
    document.querySelector('.saved-memes-page').hidden = true;
    getCanvas();
    onImgClicked(imgId);
}

function goToGallery() {
    document.querySelector('.editor-page').style.display = 'none';
    document.querySelector('.gallery-page').hidden = false;
    document.querySelector('.saved-memes-page').hidden = true;
    if (document.body.classList.contains('menu-open')) {
        console.log('menu open');
        toggleMenu();
    }
}

function goToSavedMemes() {
    document.querySelector('.editor-page').style.display = 'none';
    document.querySelector('.gallery-page').hidden = true;
    document.querySelector('.saved-memes-page').hidden = false;

    renderMyMemes();
}


function onEditColor() {
    var color = document.querySelector('.color-input').value;
    updateColor(color);
}

function onChangedLine(idx) {
    updateLineIdx(idx);
}

function onEditText(idx) {
    var currLineClass = '.line-' + idx;
    var txt = document.querySelector(currLineClass).value;
    let width = checkTextWidth(txt);
    updateTxt(txt, idx, width);
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
    const x = getCanvasWidth();
    updateTxtAlignment('right', x);
}
function onAlignCenter() {
    const x = getCanvasWidth();
    updateTxtAlignment('center', x / 2);
}
function onAlignLeft() {
    const x = 0;
    updateTxtAlignment('left', x);
}

function onChangeFont() {
    var selectedFont = document.querySelector('.font').value;
    updateTxtFont(selectedFont);
}

function onToggleLines() {
    toggleLines();
}

function onSaveToMyMemes() {
    saveToMyMemes();
    renderMyMemes();
}






