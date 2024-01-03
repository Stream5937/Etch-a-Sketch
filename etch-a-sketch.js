//the main container
const sketch = document.querySelector('.sketch');
let rowContainer;
let selectedCell;


sketch.onmouseover = (event) => {
  let e = event.target.closest('div'); // (1)
  if (!e) return;
  if (e.tagName != 'DIV') return;
  highlight(e);
};

function highlight(cell) {
  /*
  if (selectedCell) { // remove the existing highlight if any
    selectedCell.classList.remove('highlight');
  }
  */
  selectedCell = cell;
  selectedCell.classList.add('highlight'); // highlight the new cell  
}



function gridSetUp(){
  let numStr= prompt("Input number of grids/side? -max 100 ");
  let num = parseInt(numStr);
  if(num > 100){
    num = 100;
  }
  let maxSketchWidth = 800;
  let gridSize = Math.round(maxSketchWidth/num);
  console.log("grid size = "+ gridSize);
  console.log("as String "+(gridSize.toString()+'px'));
  for(let j=0; j< num; j++){
        //each row container
        rowContainer= document.createElement('div');
        rowContainer.classList.add('rowContainer');
        rowContainer.style.width= '800px';
        rowContainer.style.height= (gridSize.toString()+'px');
        sketch.appendChild(rowContainer);

        for(let i= 0; i< num; i++){
            element = document.createElement('div');
            element.classList.add('gridDiv');
            element.style.width= (gridSize.toString()+'px');
            element.style.height= (gridSize.toString()+'px');
            rowContainer.appendChild(element);
        }
    }
}