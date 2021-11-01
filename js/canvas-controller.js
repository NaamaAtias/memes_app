'use strict'

// var gElCanvas;
// var gCtx;
var gStartPos;
var gMyMemes = [];


function getCanvas() {
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
}

function renderCanvas(meme) {

    let currImg = gImgs.find(img => meme.selectedImgId === img.id);
    var img = new Image();
    img.src = currImg.url;

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        let lines = meme.lines;
        lines.forEach((line, idx) => {
            if (meme.selectedLineIdx === idx) {
                drawRect(line.pos.x, line.pos.y, line.size, line.width);
            }
            drawText(line.txt, line.pos.x, line.pos.y, line.color, line.size, line.font, line.align);

        })
    }
}

function drawRect(x, y, fontSize, width) {
    gCtx.beginPath();
    gCtx.rect(x - width / 2, y - fontSize, width, fontSize + 10);
    gCtx.fillStyle = 'rgba(225,225,225,0.5)';
    gCtx.fillRect(x - width / 2, y - fontSize, width, fontSize + 10);

}

function drawText(text, x, y, color, size, font, align) {
    // gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'white';
    gCtx.fillStyle = color;
    gCtx.font = size + 'px ' + font;
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function checkTextWidth(txt) {
    let currTxt = gCtx.measureText(txt);
    let txtWidth = currTxt.width;
    return txtWidth;
}

function getCanvasWidth() {
    return gElCanvas.width;
}
function getCanvasHeight() {
    return gElCanvas.height;
}

function onTextClicked(idx) {
    updateLineIdx(idx);
}

// function clearTxts() {
// }

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'your Meme';
}


function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your Meme is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

function saveToMyMemes() {
    gMyMemes = loadFromStorage('my-memes');
    gMyMemes.push(gElCanvas.toDataURL());
    saveToStorage('my-memes', gMyMemes);
    alert('saved!');
}

function renderMyMemes() {
    let myMemes = loadFromStorage('my-memes');
    let strHtmls = myMemes.map(meme => `<img src="${meme}" alt="">`);

    let elMyMemes = document.querySelector('.grid-saved-memes');
    elMyMemes.innerHTML = strHtmls.join('');
}

