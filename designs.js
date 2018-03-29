const pCanvas = $('#pixelCanvas'); // Set canvas grid variable
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
} // end makeGrid()
/**
 * @description Passes a function into the jQuery object which runs when
 * the document is ready. Contains a single call to prepare a blank grid.
 */
$(function() {
  makeGrid();
}); //end on ready
/**
 * @description paints or restores the default css canvas color, this
 * simulates erase by restoring white canvas if the current cell is
 * painted. A more expressive experience for the user. Eliminates the
 * need for erase function or right click / double click action.
 * @param {td} currentTableCell - current td cell from event handler
 */
function paintOrRestore(currentTableCell) {
  let color = $('#colorPicker').val();
  // because browsers will vary in the value of the color, just compare
  // here we compare the default css style to the current td cell
  // (in case it has been colored)
  if (currentTableCell.css('backgroundColor') === $('td').css('background-color')) {
    currentTableCell.css('background-color', color);
  } else { // 'erase' by restoring default color
    currentTableCell.css('background-color', $('td').css('background-color'));
  }
} // end paintOrRestore
/**
 * @description Handles submit events from color picker
 * @param  {document:event:submit} e - event
 * @listens document:submit
 */
$('#sizePicker').submit(function(e) {
  makeGrid(); //creates grid based on current size and color
  e.preventDefault(); //avoids default grid size
});
/**
 * @description Handles submit events from colorAndBackgroundPicker
 * @param  {document:event:submit} e - event
 * @listens document:submit
 */
$('#colorAndBackgroundPicker').submit(function(e) {
  paintBackground(); //paints entire grid with current color
  e.preventDefault(); //avoids default grid size
});
/**
 * @description uses current picked color to reset the entire canvas and
 * this color is the sticky default when 'erasing'.
 */
function paintBackground() {
  const currentColor = $('#colorPicker').val();
  $('td').css('background-color', currentColor);
} // end paintBackground()

// ENABLE CLICK AND DRAG PAINTING or ERASING! instead of on-click
// use mousedown so first block is painted when doing a click and DRAG
// user thinks "click and drag" but really it's mousedown and over
let mouseDown = false;
/**
 * @description Handles mousedown in table cell events
 * @param  {td:event:mousedown} e - event
 * @listens td:mousedown
 */
pCanvas.on('mousedown', 'td', function(e) {
  e.preventDefault(); //avoid any other default actions
  mouseDown = true;
  paintOrRestore($(this));
});
/**
 * @description Handles mouseover in table cell events
 * @param  {td:event:mouseover} e - event
 * @listens td:mouseover
 */
pCanvas.on('mouseover', 'td', function(e) {
  e.preventDefault(); // avoid any other default actions
  if (mouseDown) {
    paintOrRestore($(this));
  }
});
/**
 * @description Handles mouseup events at document level so user can lift to
 * stop painting/erasing even if outside canvas. This makes re-entering canvas
 * work as expected - still coloring or just hovering.
 * @param  {document:event:mouseup} e - event
 * @listens document:mouseup
 */
$(document).mouseup(function(e) {
  e.preventDefault(); // avoid any other default actions
  mouseDown = false;
});
