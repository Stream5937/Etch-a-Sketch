//the main container
const sketch = document.querySelector('.sketch');
let rowContainer;
let selectedCell;
let enableHighlight = false;
let randCheck = document.getElementById("random");
let darkCheck = document.getElementById("darken");
console.log("DarkChecked-1 = "+ darkCheck.checked);
let darker = false;
let existCol;


let heading = document.querySelector('.heading');


//element.scrollIntoView();
//element.scrollIntoView(false);
//element.scrollIntoView({ block: "end" });
heading.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

sketch.onmousedown = () =>{
  enableHighlight = enableHighlight ? false : true;
}

sketch.onmouseover = (event) => {

  let e = event.target.closest('div');
  //console.log('e:',e, 'e tag: ',e.tagName);
  if (!e) return;
  if (e.tagName != 'DIV') return;
  console.log("DarkChecked-2 = "+ darkCheck.checked);
  if(darkCheck.checked){ 
    darker =true;
    //existCol = e.style.backgroundColor.value;
    existCol = e.style.getAttribute('background-color');
    console.log("existing colour ="+existCol);
    darkenColor(existCol);
    //return;
  }

  if(enableHighlight){
    highlight(e); 
  }
};

//sketch.on
function highlight(cell) {

  selectedCell = cell;
  console.log('selected e:',selectedCell, 'e tag: ', selectedCell.tagName);
  /*
  if (selectedCell) { // remove the existing highlight if any
    selectedCell.classList.remove('highlight');
  }
  */

  if(randCheck.checked){
    selectedCell.classList.add('nohighlight'); // remove highlight from the new cell
    //console.log(selectedCell.style.backgroundColor);
    //selectedCell.style.backgroundColor="blue";    //works
    //console.log(selectedCell.style.backgroundColor);
    selectedCell.style.backgroundColor= getRndColString();
  }
  else{
    selectedCell.classList.add('highlight'); // highlight the new cell
  }  

}



function gridSetUp(){
  resetSketch();
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

function resetSketch(){
  const element= document.querySelector('.sketch');
  while(element.firstChild){
    element.removeChild(element.lastChild);
  }
}

function getRndColString() {
  let colStr = "#"+ (Math.random()	* 0xFFFFFF<<0).toString(16);
  //console.log("colStr = "+ colStr);
  return colStr;
}


function darkenColor(existCol) {

  console.log("at function  existing color = " + existCol);

}
  
