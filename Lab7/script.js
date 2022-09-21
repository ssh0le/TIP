function mealClickHandler(n) {
    const form = document.forms[n];
    if (form.elements[0].checked) {
        form.elements[1].checked = true;
        changePrice(form);
    } else {
        changePrice(form);
        resetRadioButs(form);
    }
    setSummary();
}

function portionClickHandler(n, e) {
    const form = document.forms[n];
    if (form.elements[0].checked) {
        changePrice(form);
    } else {
        e.preventDefault();
    }
    setSummary();
}

function getPrice(form) {
    let price;
    switch(form.elements[0].value) {
        case 'n1': price = 10; break;
        case 'n2': price = 9; break;
        case 'n3': price = 15; break;
        case 'n4': price = 12; break;
        case 'n5': price = 8; break;
        default: price = 0; break;
    }
    if (form.elements[1].checked) {
        price *= 2.5;
    }
    if (form.elements[2].checked) {
        price *= 1.5;
    }
    return price;
}

function resetRadioButs(form) {
    form.elements[1].checked = false;
    form.elements[2].checked = false;
    form.elements[3].checked = false;
}

function changePrice(form) {
    if(form.elements[0].checked) {
        const price = getPrice(form);
        form.elements[4].value = price;
    } else {
        form.elements[4].value = "";
    }
}

function setSummary() {
    let totalSum = 0;
    let bigMealsCount = 0;
    let deliveryPrice = 0;
    const forms = document.forms;

    for (let i = 0; i < 5; i++) {
        if (forms[i].elements[0].checked) {
            totalSum += +forms[i].elements[4].value;
        }
        if (forms[i].elements[1].checked) {
            bigMealsCount++;
        }
    }
    const totalFormElements = forms[6].elements;
    if (totalSum === 0) {
        totalFormElements[0].value = '';
        totalFormElements[1].value = '';
        totalFormElements[2].value = '';
        return;
    }
    totalFormElements[0].value = totalSum;
    if (bigMealsCount >= 2) {
        totalFormElements[1].value = 'Добавлен к заказу';
    } else {
        totalFormElements[1].value = 'Не доступен';
    }

    if (forms[5].elements[0].checked) {
        if (bigMealsCount >= 3) {
            totalFormElements[2].value = 'Бесплатно';
        } else {
            deliveryPrice = (totalSum * 0.05).toFixed(2);
            totalFormElements[2].value = deliveryPrice;
        }
    } else {
        totalFormElements[2].value = 'Без доставки';
    }
    totalFormElements[3].value = totalSum + +deliveryPrice;
}