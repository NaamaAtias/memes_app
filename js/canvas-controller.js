'use strict'
var gElCanvas;
var gCtx;
var gStartPos;

function getCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
}

function renderCanvas(meme) {

    let currImg = gImgs.find(img => meme.selectedImgId === img.id);
    var img = new Image();
    img.src = currImg.url;
    console.log(img.src);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        let lines = meme.lines;
        lines.forEach(line => {
            drawRect(line.pos.y, line.size);
            console.log(line);
            drawText(line.txt, line.pos.x, line.pos.y, line.color, line.size, line.font, line.align);
        })
    }
}

function drawRect(y, fontSize) {
    gCtx.beginPath();
    gCtx.rect(0, y-fontSize, gElCanvas.width, fontSize+10);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}

function drawText(text, x, y, color, size, font, align) {
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'white';
    gCtx.fillStyle = color;
    gCtx.font = size + 'px ' + font;
    gCtx.textAlign = align;
    // if (align === 'center') x=gElCanvas.width/2;
    // else if (align === 'left') x=0;
    // else if (align === 'right') x=gElCanvas.width;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function getCanvasWidth() {
    return gElCanvas.width;
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



