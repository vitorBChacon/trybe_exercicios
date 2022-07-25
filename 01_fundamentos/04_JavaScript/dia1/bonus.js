let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersReplacement;

for (let ascendingSorting = 0; ascendingSorting < numbers.length; ascendingSorting++) {
  if (numbers[ascendingSorting] > numbers[ascendingSorting + 1]) {
    numbersReplacement = numbers[ascendingSorting + 1]
    numbers[ascendingSorting + 1] = numbers[ascendingSorting]
    numbers[ascendingSorting] = numbersReplacement
    console.log('ascent', numbers[ascendingSorting], '--->', numbers[ascendingSorting + 1]);
  } else if (numbers[ascendingSorting - 1] > numbers[ascendingSorting]) {
    numbersReplacement = numbers[ascendingSorting]
    numbers[ascendingSorting] = numbers[ascendingSorting - 1]
    numbers[ascendingSorting - 1] = numbersReplacement
    console.log('descent:', numbers[ascendingSorting - 1], '--->',  numbers[ascendingSorting]);
  };
};

