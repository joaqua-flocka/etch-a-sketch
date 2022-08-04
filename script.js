const container = document.querySelector('.container');

function createGrid(number){
    for(let i = 0; i < number; i++){
        const newDiv = document.createElement('div');
        newDiv.style.display = 'flex';
        newDiv.style.flex = '1 1 auto';
        newDiv.classList.add('row');
        createColumns(number, newDiv);
        container.appendChild(newDiv);
    }
}

function createColumns(number, parent){
    for(let i = 0; i < number; i++){
        const newDiv = document.createElement('div');
        newDiv.style.flex = '1 1 auto';
        newDiv.classList.add('square');
        parent.appendChild(newDiv);
    }
}

function clearGrid(){
    while(container.firstChild){
        while(container.firstChild.firstChild){
            container.firstChild.removeChild(container.firstChild.firstChild);
        }
        container.removeChild(container.firstChild);
    }
}

function newGrid(number){
    clearGrid();
    createGrid(number);
}

createGrid(100);

let input = document.querySelector('.input');
let button = document.querySelector('.button');

button.addEventListener('click', (  ) => {
    button.value = input.value;
    newGrid(button.value);
    grid = document.querySelectorAll('.square');
    grid.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        })
    })
});


let grid = document.querySelectorAll('.square');
grid.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
    })
})