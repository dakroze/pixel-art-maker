
// set element with pixelCanvas ID
let canvas = document.getElementById("pixelCanvas");
// set element with colorPicker ID
let color = document.getElementById("colorPicker");
// set element with sizePicker ID
let sizePicker = document.getElementById("sizePicker");
// set element for toggle button
var toggle = document.getElementById("gridToggle");
// set element with inputHeight ID
let height = document.getElementById("inputHeight");
// set element with inputWidth ID
let width = document.getElementById("inputWidth");


// When size is submitted by the user, trigger makeGrid()

function makeGrid(height, width) {
    // row limit set by height
    for (let y = 0; y < height; y += 1) {
        // insert row element
        const row = canvas.insertRow(y);
        //column limit set by width
        for (let x = 0; x < width; x += 1) {
            // insert cell along row
            const cell = row.insertCell(x);
            // add event listener to each cell that listens to mousedown
            cell.addEventListener("mousedown", function(evt) {
                // sets value of cell to color picked
                cell.style.backgroundColor = color.value;
              });
            //cell.addEventListener("dblclick", function(evt) {
                // hide cell when double clicked
              //  cell.style.display = "none";
            //  });
            // add event listener to each to return cell to white
            cell.addEventListener("contextmenu", function(ev) {
                ev.preventDefault();
                cell.style.backgroundColor = "white";
              });
          };
        };
      };
// function to toggle cells

toggle.addEventListener("click", function() {
    ev.preventDefault();
    for (var i=0; i<cell.length; ++i) {
        if (cell[i].style.backgroundColor === "white"){
            cell[i].remove
        }
        for (var j=0; j<row.length; ++j) {
          if (row[j].style.backgroundColor === "white"){
              row[j].remove
          }
      }
    }
});
// function uses submit button to call makeGrid() funtion
sizePicker.addEventListener("submit", function(ev) {
    ev.preventDefault();
// if theres an existing grid, remove it
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    // if no grid (canvas) exists, call the makeGrid function
    makeGrid(height.value, width.value);
});
