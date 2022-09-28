const pointer = document.createElement('img');
pointer.classList.add('pointer');
pointer.src = `./assets/pointer.png`;
let i = 1;
const slider = document.getElementById('slider');

function mouseOverHandler(listItem) {
    console.log("aaaaa")
    listItem.append(pointer);
}

function mouseOutHandler() {
    pointer.remove()
}

function removeImgTransition(item) {
    item.querySelector('.slider-item-image').classList.remove('hor-move');
}

function addImgTransition(item) {
    const img  = item.querySelector('.slider-item-image');
    //https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-element
    window.getComputedStyle(img).margin;
    img.classList.add('hor-move');
}

function createSliderItem(item) {
    const img = document.createElement('img');
    img.classList.add('slider-item-image');
    img.src = `./assets/${item.getAttribute('id')}.jpg`;
    const container = document.createElement('div');
    container.classList.add('slider-item');
    container.append(img);
    return container;
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.setAttribute('id', i++);
    const sItem = createSliderItem(item);
    item.addEventListener('mouseover', () => {
        if (!slider.contains(sItem)) {
            mouseOverHandler(item);
            slider.append(sItem);
            addImgTransition(sItem);
        }
    });
    item.addEventListener('mouseleave', () => {
        mouseOutHandler();
        removeImgTransition(sItem);
        sItem.remove();
    })
})