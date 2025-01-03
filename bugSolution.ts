function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(String(a)) || 0;
  const numB = typeof b === 'number' ? b : parseFloat(String(b)) || 0;
  return numA + numB;
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, '2'); // Correct: 3
let result3 = addSafe('1', '2'); // Correct: 3
let result4 = addSafe('abc', 'def'); // Correct: 0