let $list, $input, $addBtn, $closePU, $cancelBtn, $popInput, $changeBtn;
let nextId = 1;
let editedTextId;

let firstList = ['dog', 'cat', 'food'];

main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    prepareInitialList();
    openPopup();
    closePopup();
}

prepareDOMElements = () => {
    $list = document.getElementById('list');
    $input = document.getElementById('newInput');
    $addBtn = document.getElementById('addBtn');
    $popInput = document.getElementById('ppContent');
    $closePU = document.getElementById('closePU');
    $cancelBtn = document.getElementById('cancelBtn');
    $changeBtn = document.getElementById('changeBtn');
}

prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addButtonClickHandler);
    $closePU.addEventListener('click', closePopup);
    $cancelBtn.addEventListener('click', closePopup);
    $list.addEventListener('click', listClickManager);
    $changeBtn.addEventListener('click', acceptChangeHandler);
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
    newElement.id = nextId;
    newElement.appendChild(createNewButton('Done', "done-" + nextId));
    newElement.appendChild(createNewButton('Edit', "edit-" + nextId));
    newElement.appendChild(createNewButton('Delete', "delete-" + nextId));

    nextId++;
    return newElement;
}

createNewButton = (btnRole, btnId) => {
    const newButton = document.createElement('button');
    newButton.innerText = btnRole;
    newButton.id = btnId;

    return newButton;
}

listClickManager = (eventObject) => {
    let action = eventObject.target.id.split('-')[0];
    let elementId = eventObject.target.id.split('-')[1];
    if (action === 'done') {
        markAsDone (elementId);
    } else if (action === 'delete') {
        deleteItem (elementId);
    } else if (action === 'edit') {
        editListElement(elementId);
    }
} 

markAsDone = (elementId) => {
    document.getElementById(elementId).classList.add('done');
}

deleteItem = (elementId) => {
    document.getElementById(elementId).remove();
}

editListElement = (id) => {
    let editedText = document.getElementById(id).firstChild;
    editedTextId = id;
    openPopup();
    $popInput.value = editedText.textContent;
}

acceptChangeHandler = () => {
    let editedText = document.getElementById(editedTextId).firstChild;
    editedText.textContent = $popInput.value;
    closePopup();
}

openPopup = () => {
    document.getElementById('popUp').style.display = "block";
}

closePopup = () => {
    document.getElementById('popUp').style.display = "none";
}

document.addEventListener('DOMContentLoaded', main);