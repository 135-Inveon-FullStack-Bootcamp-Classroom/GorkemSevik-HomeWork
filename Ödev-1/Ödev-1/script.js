let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";
    
    const value = localStorage.getItem("key");
   

    clearToDo.addEventListener('click', function(){
        paragraph.remove();
    })

})