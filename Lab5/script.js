function pickPicture(n) {
    if (document.images[3].src === document.images[n].src) {
        document.images[3].src = "";
    } else {
        document.images[3].src = document.images[n].src;
    }
}

function changeScale(n, width, height) {
    if (width === 'auto') {
        document.images[n].style.width = width;
    } else {
        document.images[n].style.width = width + 'px';
    }
    document.images[n].style.height = height + 'px';
}

function pictureReducer(n, action) {
    if (action) {
        document.images[n].src = './assets/selected.jpg';
    } else {
        document.images[n].src = './assets/unselected.jpg'
    }
}