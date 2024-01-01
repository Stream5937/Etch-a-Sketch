//the main continer
const container = document.querySelector('.container');
let rowContainer;

for(let j=0; j<16; j++){
    //each row container
    rowContainer= document.createElement('div');
    rowContainer.classList.add('rowContainer');
    container.appendChild(rowContainer);

    for(let i=0; i<16; i++){
        const div = document.createElement('div');
        div.classList.add('gridDiv');
        rowContainer.appendChild(div);
    }
}
