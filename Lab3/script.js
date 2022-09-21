function calculateArea(form, event) {
    const x1 = form.x1.value;
    const y1 = form.y1.value;
    const x2 = form.x2.value;
    const y2 = form.y2.value;
    const x3 = form.x3.value;
    const y3 = form.y3.value;
    const a = calculateLength(x1, y1, x2, y2);
    const b = calculateLength(x2, y2, x3, y3);
    const c = calculateLength(x1, y1, x3, y3);
    const p = (a + b + c) / 2;
    alert("Площадь треугольника: " + Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(1));
    form.x1.select();
}

function calculateLength(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
}

function calculateOrigin(x, y) {
    alert("Расстояние до начала координат: " + calculateLength(x.value, y.value, 0, 0).toFixed(2));
}

function swap(x1, y1, x2, y2){
    if (x1.value === '' || x2.value === '' || y1.value === '' || y2.value === '') {
        return;
    }
    const tmpX = x1.value;
    const tmpY = y1.value;
    x1.value = x2.value;
    y1.value = y2.value;
    x2.value = tmpX;
    y2.value = tmpY;
}