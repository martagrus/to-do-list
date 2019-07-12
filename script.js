let $list, $input, $addBtn;

let firstList = ['dog', 'cat', 'cook'];

main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    prepareInitialList();
    removeListElement();
}

prepareDOMElements = () => {
    $list = document.getElementById('list');
    $input = document.getElementById('newInput');
    $addBtn = document.getElementById('addBtn');
}

prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addButtonClickHandler);
}

prepareInitialList = () => {
    firstList.forEach(task => {
        addNewElementToList(task);
    });
}

addButtonClickHandler = () => {
    addNewElementToList($input.value);
}

addNewElementToList = (title) => {
    const newElement = createElement(title);
    $list.appendChild(newElement);
}

createElement = (title) => {
    const newElement = document.createElement('li');
    newElement.innerText = title;
    newElement.appendChild(createNewButton('Done'));
    newElement.appendChild(createNewButton('Edit'));
    newElement.appendChild(createNewButton('Delete'));

    return newElement;
}

createNewButton = (wdid) => {
    const newButton = document.createElement('button');
    newButton.innerText = wdid;
    return newButton;
}

function removeListElement(/* id */) {
    // Usuwanie elementu z listy
    
}

function editListElement(/* id */) {
    // Pobranie informacji na temat zadania
    // Umieść dane w popupie
    //const edtBtn = document.createElement('button');
    //edtBtn.innerText = 'Edit';
}

function addDataToPopup(/* Title, author, id */) {
    // umieść informacje w odpowiednim miejscu w popupie
}

function acceptChangeHandler() {
    // pobierz dane na temat zadania z popupu (id, nowyTitle, nowyColor ...)
    // Następnie zmodyfikuj element listy wrzucając w niego nowyTitle, nowyColor...
    // closePopup()
}

function openPopup() {
    // Otwórz popup
}

function closePopup() {
    // Zamknij popup
}

function declineChanges() { //niepotrzebna raczej
    // closePopup()
}

function markElementAsDone(/* id */) {
    //zaznacz element jako wykonany (podmień klasę CSS)
}

document.addEventListener('DOMContentLoaded', main);