/*Write a function pyramidSum that takes in an array of numbers representing the base of a pyramid. 
The function should return a 2D array representing a complete pyramid with the given base. 
To construct a level of the pyramid, we take the sum of adjacent elements of the level below.*/

function pyramidSum(base) {
  const pyramid = [base];

  for (let i = base.length - 1; i > 0; i--) {
    const levelAbove = pyramid[0];
    const level = [];

    for (let j = 0; j < i; j++) {
      const sum = levelAbove[j] + levelAbove[j + 1];
      level.push(sum);
    }

    pyramid.unshift(level);
  }

  return pyramid;
}

console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
