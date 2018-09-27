module.exports = function solveEquation(equation) {
  const trimedStr = String(equation.replace(/ /g, "")); // '-20 * x^2 - 108797540 * x - 130011773690520'
 
  const reperA = "*x^2";
  const reperB = "*x";

  const aCoef = Number(trimedStr.substring(0, trimedStr.indexOf(reperA)));

  const bCoef = Number(
    trimedStr.substring(
      trimedStr.indexOf(reperA) + reperA.length,
      trimedStr.lastIndexOf(reperB)
    )
  );

  const cCoef = Number(
    trimedStr.substring(trimedStr.lastIndexOf(reperB) + reperB.length)
  );

  const d = Math.pow(bCoef, 2) - 4 * aCoef * cCoef;
  const x1 = Math.round((-bCoef + Math.sqrt(d)) / (2 * aCoef));
  const x2 = Math.round((-bCoef - Math.sqrt(d)) / (2 * aCoef));

  return [x1, x2].sort((a, b) => (a - b));
};
