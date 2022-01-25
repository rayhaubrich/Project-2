var color = document.getElementById("colorPicker");// Select colorPicker
var size = document.getElementById("sizePicker");// Select sizePicker
var height = document.querySelector("#inputHeight");// Select inputHeight
var width = document.querySelector("#inputWidth");// Select inputWidth
var pixelCanvas = document.querySelector("#pixelCanvas");// Select pixelCanvas

size.addEventListener("submit", makeGrid);// When size is submitted by the user, call makeGrid()

// console.log(width.value);

function makeGrid(evt) {
    evt.preventDefault();//prevents default behavior when you open the pixel art maker
    
    while(pixelCanvas.firstChild){
        pixelCanvas.removeChild(pixelCanvas.firstChild);// if there is a pixelCanvas, it will be removed 
    }

    for (let x = 1; x <= height.value; x++) {
        const row = document.createElement("tr");//saves the row
        pixelCanvas.appendChild(row);// add´s the row´s to the pixelCanvas

        for (let y = 1; y <= width.value; y++) {
            const cell = document.createElement("td");//saves the tabledata
            row.appendChild(cell);// add´s the tabledata to the row and create´s the final cell´s
        }
    }

    const cellTabel = document.querySelectorAll("td");//saves the tabeldata and make´s it availebel for the following event listener
    // console.log(cellTabel);
    
    cellTabel.forEach(function(cells){// add´s an listener to the cell´s and removes or add´s color to the cell´s
        cells.addEventListener("click", function(evt){
            if (evt.target.style.backgroundColor === ""){
                evt.target.style.backgroundColor = color.value ;
            }
            else{
                evt.target.style.backgroundColor = "" ;
            }
        });
    });
}