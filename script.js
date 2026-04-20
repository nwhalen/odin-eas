//Create 16 x 16 div grid
function drawGrid() {
  const mainDiv = document.querySelector(".main-div");
  for (let i = 0; i < 16; i++) {
    const currentContainer = document.createElement("div");
    currentContainer.classList.add("child-div-container");
    for (let j = 0; j < 16; j++) {
      let gridSquare = document.createElement("div");
      gridSquare.classList.add("child-div");
      gridSquare.addEventListener("mouseleave", () => {
        let timeoutId = setTimeout(() => {
          gridSquare.style.backgroundColor = "white";
        }, 2000);
      });
      gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "gray";
        clearTimeout(timeoutId);
      });
      currentContainer.appendChild(gridSquare);
      console.log("Added square i = " + i + " j = " + j);
    }
    mainDiv.appendChild(currentContainer);
  }
}
drawGrid();
