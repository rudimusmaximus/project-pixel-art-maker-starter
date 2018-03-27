/**
 * @description erases the previous grid and creates a new one based on
 * the current user size values
 */
function makeGrid() {
  const numRowsForHeight = $('#inputHeight').val();
  const numColumnsForWidth = $('#inputWeight').val();
  // delete any previous table rows
  pCanvas.empty();

  //BUILD TABLE
  let rows = '';
  let r = 1; //row index for loop
  while (r <= numRowsForHeight) {
    rows += '<tr>'; //start a row
    for (let c = 1; c <= numColumnsForWidth; c++) {
      rows += '<td></td>'; //accumulate cells in the current table row
    }
    rows += '</tr>'; //close or end the row
    r += 1;
  } // end while loop
  //APPEND string which becomes table to canvas element adds to the DOM
  pCanvas.append(rows);
}
/**
 * @description effectively an OnReady function that passes a function into the jQuery
 * object which runs when the document is ready. Here we add listeners for
 * canvas and submit events
 */
$(function() {
  makeGrid();
}); //end on ready

// ATTACH delegated event handlers

// Handel submit events
$('#sizePicker').submit(function(e) {
  makeGrid();
  e.preventDefault();
});
// Set canvas variables
let pCanvas = $('#pixelCanvas');
const defaultBlankCanvasColor = "#ffffff";

// SIMULATE ERASERS by restoring white for any table cell in canvas
// by Doubleclick
pCanvas.on("dblclick", "td", function(e) {
  e.preventDefault(); //avoid any other default actions
  $(this).css("background-color", defaultBlankCanvasColor);
});
// by right click
pCanvas.on("contextmenu", "td", function(e) {
  e.preventDefault(); //avoid contextmenu in canvas table/grid
  $(this).css("background-color", defaultBlankCanvasColor);
});

// ENABLE CLICK AND DRAG
let mouseDown = false;
// instead of on click use mousedown so first block is painted when doing a click and DRAG
// user thinks "click and drag" but really it's mousedown and drag
pCanvas.on("mousedown", "td", function(e) {
  e.preventDefault(); //avoid any other default actions
  mouseDown = true;
  let color = $("#colorPicker").val();
  $(this).css("background-color", color);
});
pCanvas.on("mouseup", "td", function(e) {
  e.preventDefault(); //avoid any other default actions
  mouseDown = false;
});
pCanvas.on("mouseover", "td", function(e) {
  e.preventDefault(); //avoid any other default actions
  if (mouseDown) {
    let color = $("#colorPicker").val();
    $(this).css("background-color", color);
  }
});
