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
    grid = document.querySelectorAll('.square');
}



function wakeGrid(grid){
    grid.forEach((square) => {
        if(mode == 'shade'){
            square.classList.add('shaded');
        }
        let opacity = 0;
        square.addEventListener('mouseenter', (event) => {
            if(event.which == 1){
                if(mode == 'default') square.classList.add('hovered');
                else if(mode == 'rainbow'){
                    square.style.backgroundColor = `rgb(${random(256)},${random(256)},${random(256)})`;
                }
                else if(mode == 'shade'){
                    opacity += .1;
                    square.style.opacity = opacity;
                }
                else alert('error');
            }
        })
    })
}

function random(number){
    return (Math.floor(Math.random() * number));
}

let input = document.querySelector('.input');
let button = document.querySelector('.button');
let rainbow = document.querySelector('.rainbow');
let shade = document.querySelector('.shade');
let reset = document.querySelector('.reset');
let mode = 'default';

createGrid(100);
let grid = document.querySelectorAll('.square');
wakeGrid(grid);

button.addEventListener('click', (  ) => {
    if(!input.value){
        newGrid(100);
        wakeGrid(grid);
    }
    else{
        newGrid(input.value);
        wakeGrid(grid);
    }
});

rainbow.addEventListener('click', () => {
    mode = 'rainbow';
    if(!input.value){
        newGrid(100);
        wakeGrid(grid);
    }
    else{
        newGrid(input.value);
        wakeGrid(grid);
    }
});

shade.addEventListener('click', () => {
    mode = 'shade';
    if(!input.value){
        newGrid(100);
        wakeGrid(grid);
    }
    else{
        newGrid(input.value);
        wakeGrid(grid);
    }
});

reset.addEventListener('click', () => {
    mode = 'default';
    newGrid(100);
    wakeGrid(grid);
});
