
document.getElementById("calculateButton").addEventListener("click", function () {
  const roofHeigt = document.getElementById("roofHeight").value;
  const houseWidth = document.getElementById("houseWidth").value;
  const houseHeight = document.getElementById("houseHeight").value;

  if (roofHeigt <= 0) {
    alert("Roof height needs to be greater than zero.")
  }

  if (houseWidth <= 0) {
    alert("House width needs to be greater than zero.")
  }

  if (houseHeight <= 0) {
    alert("House height needs to be greater than zero.")
  }

  const houseArea = calculateGableArea(roofHeigt, houseWidth, houseHeight);
  document.getElementById("resultLabel").innerText = "Gable area is " + houseArea + "m².";
});

function calculateGableArea(roofHeight, houseWidth, houseHeight) {
  const roofArea = 1 / 2 * roofHeight * houseWidth;
  const houseArea = houseHeight * houseWidth;

  const totalHouseArea = roofArea + houseArea;

  return totalHouseArea;
}