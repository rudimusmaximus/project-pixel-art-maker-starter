/**
 * @description erases the previous grid and creates a new one based on
 * the current user size values
 */
function makeGrid() {
  const numRowsForHeight = $("#inputHeight").val();
  const numColumnsForWidth = $("#inputWeight").val();
  // delete any previous table rows
  $('#pixelCanvas').empty();

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
  $('#pixelCanvas').append(rows);
}
/**
 * @description OnReady function that passes a function into the jQuery
 * object to run when the document is ready. Here we add listeners for
 * canvas and submit events
 */
$(function() {
  makeGrid();
  // attaches a delegated event handler
  $('#pixelCanvas').on("click", "td", function(e) {
    // get currently selected color
    let color = $('#colorPicker').val();
    // paint background if event is on a table cell
    $(this).css("backgroundColor", color);
  });
  $('#sizePicker').submit(function(e) {
    makeGrid();
    e.preventDefault();
  });
});//end on ready
