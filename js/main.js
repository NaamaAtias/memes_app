'use strict'
var gElCanvas;
var gCtx;

function init() {
    createImgs();
    renderImgs();
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners();
    console.log(checkTextWidth(gMeme.lines[0].txt));
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}