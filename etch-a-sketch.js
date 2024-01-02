//the main continer
const sketch = document.querySelector('.sketch');
let rowContainer;
let selectedCell;

for(let j=0; j<16; j++){
    //each row container
    rowContainer= document.createElement('div');
    rowContainer.classList.add('rowContainer');
    sketch.appendChild(rowContainer);

    for(let i=0; i<16; i++){
        const div = document.createElement('div');
        div.classList.add('gridDiv');
        rowContainer.appendChild(div);
    }
}

sketch.onmouseover = function(event) {
    let e = event.target.closest('div'); // (1)
    //console.log("at e");
    if (!e) return; // (2)
    //console.log("at past !e");
    console.log("e tagname = " + e.tagName);
    if (e.tagName != 'DIV') return;
    //console.log("at past !div");
    highlight(e); // (4)
    //console.log("returned from highlight");
  };

  function highlight(cell) {
    //console.log("At function call cell = " +cell);
    /*
    if (selectedCell) { // remove the existing highlight if any
      selectedCell.classList.remove('highlight');
    }
    */
    selectedCell = cell;
    console.log("selected cell = " + selectedCell)
    selectedCell.classList.add('highlight'); // highlight the new cell
  }

