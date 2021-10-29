'use strict'
var gElCanvas;
var gCtx;

function init() {
    createImgs();
    renderImgs();
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners();
}