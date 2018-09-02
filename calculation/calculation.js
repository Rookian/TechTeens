
function calculate(roofHeight,  houseWidth, houseHeight) {
  const roofArea = 1/2 * roofHeight * houseWidth;
  const houseArea = houseHeight * houseWidth;

  const totalHouseHeight = roofArea + houseArea;

  return totalHouseHeight;
}