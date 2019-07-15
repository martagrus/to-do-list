let $list, $input, $addBtn, $closePU, $cancelBtn;
let nextId = 1;

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
    //$deleteBtn = document.getElementById('delete-'+ nextId);
    //$openPU = document.getElementById('edit-' + nextId);
    //$doneBtn = document.getElementById('done-' + nextId);
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
    newElement.appendChild(createNewButton('Done', "done-" + nextId, nextId));
    newElement.appendChild(createNewButton('Edit', "edit-" + nextId, nextId, popUp));
    newElement.appendChild(createNewButton('Delete', 'delete-' + nextId, nextId));

    nextId++;
    return newElement;
}

createNewButton = (btnRole, btnId, elementId, popUp) => {
    const newButton = document.createElement('button');
    newButton.innerText = btnRole;
    newButton.id = btnId;
    if (btnRole === 'Delete') {
        newButton.addEventListener ('click', () => {
            document.getElementById(elementId).remove();
        });
    }
    if (btnRole === 'Done') {
        newButton.addEventListener ('click', () => {
            document.getElementById(elementId).style.background = "#f739a6";
            document.getElementById(elementId).style.textDecoration = "line-through";
        });
    }
    if (btnRole === 'Edit') {
        newButton.addEventListener ('click', () => {
            document.getElementById(popUp).style.display = "block";
        });
    }

    return newButton;
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

//openPopup = () => {
    //$openPU.addEventListener('click', openPU = (popUp) => {
    //let popUpWindow = document.getElementbyId('popUp');    
    //popUpWindow.style.display = "block";
    //});
//}

closePopup = () => {
    $closePU.addEventListener('click', declineChanges);
    $cancelBtn.addEventListener('click', declineChanges);
}

declineChanges = () => {
    $closePU.style.display = "none";
}

document.addEventListener('DOMContentLoaded', main);