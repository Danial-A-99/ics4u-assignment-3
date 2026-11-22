import type { Coefficients, Results } from "@ics4u-assignment-02/types";

export const pVal = ({ a, b, c }: Coefficients): number => {
  return Number(((3 * a * c - b ** 2) / (3 * a ** 2)).toFixed(4));
};

export const qVal = ({ a, b, c, d }: Coefficients): number => {
  return Number(((27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3)).toFixed(4));
};

export const discriminant = ({ a, b, c, d }: Coefficients): number => {
  return Number(((qVal({ a, b, c, d }) / 2) ** 2 + (pVal({ a, b, c, d }) / 3) ** 3).toFixed(4));
};

export const cardanoMethod = ({ a, b }: Coefficients, q: number, discriminant: number) => {
  const u = Number(Math.cbrt(-q / 2 + Math.sqrt(discriminant)).toFixed(4));
  const v = Number(Math.cbrt(-q / 2 - Math.sqrt(discriminant)).toFixed(4));
  const root = Number((u + v - b / (3 * a)).toFixed(4));
  const r1 = root;
  const r2 = "Imaginary";
  const r3 = "Imaginary";
  const typeARoots = "1 Real Root, 2 Complex Roots";
  const factoredForm = "No real factorization";
  return [r1, r2, r3, factoredForm, typeARoots];
};

export const trigonometricMethod = ({ a, b }: Coefficients, p: number, q: number) => {
  const theta = Math.acos(-q / (2 * Math.sqrt(-1 * (p / 3) ** 3))) / 3;
  const x1 = Number((2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a)).toFixed(4));
  const x2 = Number((2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3) - b / (3 * a)).toFixed(4));
  const x3 = Number((2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3) - b / (3 * a)).toFixed(4));
  let factoredForm = "";
  let typeARoots = "";
  if (x1 === x2 && x1 !== x3) {
    factoredForm = `(x - ${x1})^2 (x - ${x3})`.replace("- -", "- ");
    typeARoots = `Double Real Roots, Single Real Root`;
  } else if (x1 === x3 && x1 !== x2) {
    factoredForm = `(x - ${x1})^2 (x - ${x2})`.replace("- -", "- ");
    typeARoots = `Double Real Roots, Single Real Root`;
  } else if (x2 === x3 && x2 !== x1) {
    factoredForm = `(x - ${x2})^2 (x - ${x1})`.replace("- -", "- ");
    typeARoots = `Double Real Roots, Single Real Root`;
  } else if (x1 !== x3 && x1 !== x2) {
    factoredForm = `(x - ${x1}) (x - ${x2}) (x - ${x3})`.replace("- -", "- ");
    typeARoots = `3 Distinct Real Roots`;
  } else {
    factoredForm = `(x - ${x1})^3`.replace("- -", "- ");
    typeARoots = `Triple Real Roots`;
  }
  return [x1, x2, x3, factoredForm, typeARoots];
};

export const writeEquation = ({ a, b, c, d }: Coefficients) => {
  const newEquation = ` ${a}x³ + ${b}x² + ${c}x + ${d} `
    .replace("+ 0x³", "")
    .replace("+ 0x²", "")
    .replace("+ 0x", "")
    .replaceAll("+ 0 ", "")
    .replaceAll("+ -", "- ");
  return newEquation;
};

export const firstDerivative = ({ a, b, c }: Coefficients) => {
  const derivEquation = `${a * 3}x² + ${b * 2}x + ${c}`.replace("+ 0x", "").replace("+ 0", "").replaceAll("+ -", "- ");
  return derivEquation;
};

export const secondDerivative = ({ a, b }: Coefficients) => {
  const derivEquation = `${a * 3 * 2}x + ${b * 2}`.replace("+ 0", "").replaceAll("+ -", "- ");
  return derivEquation;
};

export const minMaxPoints = ({ a, b, c, d }: Coefficients) => {
  let minPoint = [];
  let maxPoint = [];
  const disc = (b * 2) ** 2 - 4 * (a * 3) * c;
  if (disc >= 0) {
    const root1 = Number(((-(b * 2) + Math.sqrt(disc)) / (2 * (a * 3))).toFixed(4));
    const root2 = Number(((-(b * 2) - Math.sqrt(disc)) / (2 * (a * 3))).toFixed(4));
    const y1 = Number((a * root1 ** 3 + b * root1 ** 2 + c * root1 + d).toFixed(4));
    const y2 = Number((a * root2 ** 3 + b * root2 ** 2 + c * root2 + d).toFixed(4));
    if (y1 > y2) {
      maxPoint = [root1, y1];
      minPoint = [root2, y2];
    } else {
      maxPoint = [root2, y2];
      minPoint = [root1, y1];
    }
  } else {
    maxPoint = ["N/A", "N/A"];
    minPoint = ["N/A", "N/A"];
  }
  return [minPoint, maxPoint];
};

export const MathFunctions = ({ a, b, c, d }: Coefficients): Results => {
  const values = { a, b, c, d };
  const disc = discriminant(values);
  const p = pVal(values);
  const q = qVal(values);
  let r = [0, 0, 0, " ", " "];
  if (disc <= 0) {
    trigonometricMethod(values, p, q);
    r = trigonometricMethod(values, p, q);
  } else {
    cardanoMethod(values, q, disc);
    r = cardanoMethod(values, q, disc);
  }
  const min = minMaxPoints(values)[0];
  const max = minMaxPoints(values)[1];
  const equation = writeEquation(values);
  const derivOne = firstDerivative(values);
  const derivTwo = secondDerivative(values);
  return {
    discriminant: disc,
    equation: equation,
    factored: String(r[r.length - 2]),
    firstDerivative: derivOne,
    maximum: { x: max[0], y: max[1] },
    minimum: { x: min[0], y: min[1] },
    p: p,
    q: q,
    r1: { x: r[0], y: 0 },
    r2: { x: r[1], y: 0 },
    r3: { x: r[2], y: 0 },
    roots: String(r[r.length - 1]),
    secondDerivative: derivTwo,
  };
};
