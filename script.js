const container = document.querySelector('.container');

function createGrid(number){
    for(let i = 0; i < number; i++){
        const newDiv = document.createElement('div');
        newDiv.style.display = 'flex';
        newDiv.style.flex = '1 1 auto';
        createColumns(number, newDiv);
        container.appendChild(newDiv);
    }
}

function createColumns(number, parent){
    for(let i = 0; i < number; i++){
        const newDiv = document.createElement('div');
        newDiv.style.flex = '1 1 auto';
        newDiv.classList.add('square');
//        newDiv.textContent = 's'
        parent.appendChild(newDiv);
    }
}

createGrid(160);

let grid = document.querySelectorAll('.square');
grid.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
    })
})