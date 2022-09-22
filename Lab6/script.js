function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}


console.log(find(['test', 'text', 'taxi'], 'test'));
console.log(find([-1, 0, 1], 2));
console.log(find([-1, 0, 1], 1));

const out = document.getElementById('output');
function createArray(min, max, length) {
    out.innerHTML = '';
    const arr = [];
    while (length--) {
        arr.push((Math.random() * (+max - +min) + +min).toFixed(1))
    }
    out.innerHTML += ("Созданный массив: <br>")
    out.innerHTML += arr.reduce((prev, curr) => {
        return prev + curr + '<br>';
    }, '');
    out.innerHTML += ("<br>")
    return arr;
}

function doubleValue(value) {
    return value * 2;
}

function map(fn, arr) {
    const newArr = [];
    for (value of arr) {
        newArr.push(fn(value));
    }
    out.innerHTML += ("Массив после функции map:<br>")
    out.innerHTML += newArr.reduce((prev, curr) => {
        return prev + curr + '<br>';
    }, '');
    out.innerHTML += ("<br>")
    return newArr;
}