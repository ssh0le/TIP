//Сделать выборку этого же элемента двумя другими способами на Ваше усмотрение
console.log($("#forheader img"));
console.log($(".maindiv div[id*=header] img"));

// Отобрать в jquery набор все картинки кроме первой и скрыть их с помощью 
// функции hide() за 5 секунд. Подсказка: для формирования набора используйте 
// фильтр not.
//getAllImgExceptFirst();
function getAllImgExceptFirst(){
    $('img:not(:first-child)').hide(5000);
}

// Напишите функцию, которая получает 3 параметра.
// id элемента, с которым надо работать.
// Название атрибута, который нужно изменить.
// Новое значение указанного атрибута.
// Функция в результате своей работы должна изменить указанный атрибут 
// указанного элемента.
function changeAttribute(id, attr, value) {
    $(`#${id}`).css(attr, value);
}

// Сделайте выборку для картинки второго мотоцикла moto2.jpg.
// С помощью метода css, добавьте ей рамку 1px solid #333333.
// Примените анимацию, во время которой увеличьте рамку до значения в 5px
// за 5 секунд.
// После выполнения анимации плавно скройте шапку с помощью функции 
// fadeOut() за 5 секунд.
// Используйте цепные функции.
animateBorder();
function animateBorder() {
    $(`#img_2`).css("border", '1px solid #333333').animate({'border-width':'5px'},5000, () => $('#forheader').fadeOut(5000));
}

// Ваша задача добавить в самый конец тэга <body> новый абзац с любым 
// текстом 
// и дать этому абзацу id="newparagraph".
// После этого изменить цвет фона этого параграфа на черный, а цвет текста на 
// белый.
// Используйте цепные функции
addParagraph();
function addParagraph() {
    const p = $('<p>Это конец body<p>');
    $('body').append(p);
    p.attr('id', 'newparagraph').css('background', 'black').css('color', 'white')
}
