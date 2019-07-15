let $list, $input, $addBtn, $closePU, $cancelBtn, $deleteBtn, $openPU, $doneBtn;

let nextId = 1;

let firstList = ['dog', 'cat', 'food'];

main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    prepareInitialList();
    openPopup();
    closePopup();
    removeListElement();
    markElementAsDone();
}

prepareDOMElements = () => {
    $list = document.getElementById('list');
    $input = document.getElementById('newInput');
    $addBtn = document.getElementById('addBtn');
    $closePU = document.getElementById('popUp');
    $cancelBtn = document.getElementById('cancelBtn');
    $deleteBtn = document.getElementById('delete-'+ nextId);
    $openPU = document.getElementById('edit-' + nextId);
    $doneBtn = document.getElementById('done-' + nextId);
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

removeListElement = () => {
    $deleteBtn.addEventListener('click', closeLi = () => {
    let deleteLi = document.getElementById(nextId);
    deleteLi.remove;
});
}

function editListElement(id) {
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
    $openPU.addEventListener('click', openPU = (popUp) => {
    let popUpWindow = document.getElementbyId('popUp');    
    popUpWindow.style.display = "block";
    });
}

closePopup = () => {
    $closePU.addEventListener('click', declineChanges);
    $cancelBtn.addEventListener('click', declineChanges);
}

declineChanges = () => {
    $closePU.style.display = "none";
}

markElementAsDone = () => {
    $doneBtn.addEventListener('click', liChecked = () => {
    li.style.background = "#f6ff9f";
    li.style.textDecoration = "line-through";
});
}


document.addEventListener('DOMContentLoaded', main);