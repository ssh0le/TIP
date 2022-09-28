window.addEventListener('load', () => {
    setTodayDate('from-date');
    setDate('date1', '2021-09-20');
    setDate('date2', '2020-08-20');
    setDate('date3', '2022-08-20');
    setDate('date4', '2022-07-20');
    setDate('date5', '2019-09-20');
    setDate('date6', '2010-09-20');
})

function getValue(id) {
    return document.getElementById(id).value;
}

function setTodayDate(id) {
    document.getElementById(id).value = (new Date()).toISOString().split('T')[0];
}

function setDate(id, date) {
    document.getElementById(id).value = (new Date(date)).toISOString().split('T')[0];
}

console.log((new Date()).toISOString());

function clickHandler() {
    const date1 = new Date(getValue('from-date'));
    const date2 = new Date(getValue('to-date'));
    const diffTime = Math.abs(date2 - date1);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const fullWeekAmount = Math.floor(days / 7);
    let rest = days - fullWeekAmount * 7;
    let workSum = fullWeekAmount * 5,
        weekEndSum = fullWeekAmount * 2;
    let i = date1.getDay();
    while (0 != rest--) {
        if (i % 7 !== 6 && i % 7 !== 1) {
            workSum++;
        } else {
            weekEndSum++;
        }
        i++;
    }
    document.getElementById('work').value = workSum;
    document.getElementById('week').value = weekEndSum;
}

function secondClickHandler() {
    const forms = document.querySelectorAll(".employee");
    setListInLS(forms);
    const xValues = ['Молодые', "Опытные", "Ветераны"];
    const yValues = [0, 0, 0];
    for (let i = 0; i < forms.length; i++) {
        const diff = (new Date()) - (new Date(forms[i].elements[2].value));
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        if (days > 5 * 365 + 1) {
            yValues[2]++;
        } else if (days > 365) {
            yValues[1]++;
        } else {
            yValues[0]++;
        }
    }

    let cnv = document.getElementById('chart');
    if (!cnv) {
        cnv = document.createElement('div');
        cnv.id = 'chart';
        document.getElementById('second').append(cnv);
    }

    const data = [{
        x: xValues,
        y: yValues,
        type: "bar"
    }];
    const layout = {
        title: "Количество работников"
    };

    Plotly.newPlot("chart", data, layout);
    window.open('./List/list.html', '_blank');
}

function setListInLS(forms) {
    const obj = {
        list: []
    }
    for (let i = 0; i < forms.length; i++) {
        obj.list.push({
            name: forms[i].elements[1].value,
            date: forms[i].elements[2].value
        })
    }
    localStorage.setItem('list', JSON.stringify(obj));
}