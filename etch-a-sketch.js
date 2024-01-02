//the main continer
//const container = document.querySelector('.container');
const sketch = document.querySelector('.sketch');
let rowContainer;
let selectedCell;

for(let j=0; j<16; j++){
    //each row container
    rowContainer= document.createElement('div');
    rowContainer.classList.add('rowContainer');
    //container.appendChild(rowContainer);
    sketch.appendChild(rowContainer);

    for(let i=0; i<16; i++){
        const div = document.createElement('div');
        div.classList.add('gridDiv');
        rowContainer.appendChild(div);
    }
}

//container.onclick = function(event) {
//container.onmouseover = function(event) {
sketch.onmouseover = function(event) {
    let e = event.target.closest('div'); // (1)
  console.log("at e");
    if (!e) return; // (2)
    console.log("at past !e");
    //if (!this.rowContainer.contains(e)) return; // (3)  pobably works with Table
    console.log("e tagname = " + e.tagName);
    if (e.tagName != 'DIV') return;
    console.log("at past !div");
    highlight(e); // (4)
    console.log("returned from highlight");
  };

  function highlight(cell) {
    console.log("At function call cell = " +cell);
    /*
    if (selectedCell) { // remove the existing highlight if any
      selectedCell.classList.remove('highlight');
    }
    */
    selectedCell = cell;
    console.log("selected cell = " + selectedCell)
    selectedCell.classList.add('highlight'); // highlight the new cell
  }


/*############

.HTML

<table>
<tr>
  <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
</tr>
<tr>
  <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
  <td class="n">...</td>
  <td class="ne">...</td>
</tr>
<tr>...2 more lines of this kind...</tr>
<tr>...2 more lines of this kind...</tr>
</table>

.js

table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)
  
    if (!td) return; // (2)
  
    if (!table.contains(td)) return; // (3)
  
    highlight(td); // (4)
  };

  function highlight(td) {
    if (selectedTd) { // remove the existing highlight if any
      selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // highlight the new td
  }

  ###############*/