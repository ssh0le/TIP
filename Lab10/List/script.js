window.addEventListener('load', () => {
    loadHandler();
})

function loadHandler() {
    const wrapper = createElement('div', 'wrapper');
    wrapper.append(createList(getListFromLS()))
    document.body.append(wrapper);
}

function createList(content) {
    const list = createElement('table', 'list');
    const header = createElement('tr', 'header');
    header.innerHTML = `
    <th class="number">ID</th>
    <th class="name">Name</th>
    <th class="date">Date</th>
    `
    list.append(header);
    let i = 1;
    content.list.forEach(item => {
        item.id = i++;
        list.append(createListItem(item));
    })
    return list;
}

function createListItem(content) {
    const listItem = createElement('tr', 'list-item');
    listItem.innerHTML = `
    <td class="number">${content.id}</td>
    <td class="name">${content.name}</td>
    <td class="date">${content.date}</td>
    `
    return listItem;
}

function createElement(tag, className = "") {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    return element;
}

function getListFromLS() {
    return JSON.parse(localStorage.getItem('list'));
}