let $list, $input, $addBtn, $closePU, $cancelBtn, $editedText;
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
    
}

prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addButtonClickHandler);
    $closePU = document.getElementById('closePU');
    $closePU.addEventListener('click', closePopup);
    $cancelBtn = document.getElementById('cancelBtn');
    $cancelBtn.addEventListener('click', closePopup);
    $changeBtn = document.getElementById('changeBtn');
    $changeBtn.addEventListener('click', closePopup);
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
    newElement.appendChild(createNewButton('Edit', "edit-" + nextId, nextId));
    newElement.appendChild(createNewButton('Delete', "delete-" + nextId, nextId));

    nextId++;
    return newElement;
}

createNewButton = (btnRole, btnId, elementId, nextId) => {
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
            document.getElementById(elementId).style.background = "#db5858";
            document.getElementById(elementId).style.textDecoration = "line-through";
        });
    }
    if (btnRole === 'Edit') {
        newButton.addEventListener ('click', () => {
            document.getElementById('popUp').style.display = "block";
            editListElement;
        });
    }

    return newButton;
}


function editListElement(nextId) {
    $editedText = document.getElementById(nextId).innerHTML;
    $editedText = document.querySelector(inpupt.value);
    $editedText.id = ("edited-" + nextId);
    
    }

    // Pobranie informacji na temat zadania
    // Umieść dane w popupie
    //const edtBtn = document.createElement('button');
    //edtBtn.innerText = 'Edit';



function addDataToPopup(/* Title, author, id */) {

    
    // umieść informacje w odpowiednim miejscu w popupie
}

function acceptChangeHandler() {


    // pobierz dane na temat zadania z popupu (id, nowyTitle, nowyColor ...)
    // Następnie zmodyfikuj element listy wrzucając w niego nowyTitle, nowyColor...
    // closePopup()
}

closePopup = () => {
        document.getElementById('popUp').style.display = "none";
    }

document.addEventListener('DOMContentLoaded', main);