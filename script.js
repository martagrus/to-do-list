let $list, $input, $addBtn, $closePU, $cancelBtn;

let firstList = ['dog', 'cat', 'food'];

main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    prepareInitialList();
    closePopup();
}

prepareDOMElements = () => {
    $list = document.getElementById('list');
    $input = document.getElementById('newInput');
    $addBtn = document.getElementById('addBtn');
    $closePU = document.getElementById('popUp');
    $cancelBtn = document.getElementById('cancelBtn');
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

createNewButton = (btnRole) => {
    const newButton = document.createElement('button');
    newButton.innerText = btnRole;
    
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

openPopup = () => {

}

closePopup = () => {
    $closePU.addEventListener('click', declineChanges);
    $cancelBtn.addEventListener('click', declineChanges);
}

declineChanges = () => {
   $closePU.style.display = "none";
}

function markElementAsDone(/* id */) {
    document.getElementById('')
}

document.addEventListener('DOMContentLoaded', main);