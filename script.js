console.log("Hello World");

/**
 * 1. Tipăriți toate numerele pare de la 0 la 10
 * Input: n = 10, unde n este numărul maxim până la care se va executa bucla
 * Output: 0, 2, 4, 6, 8, 10
 */
const printEvenNumbers = (maxNumber) => {
  const evenNumbers = [];

  for (let i = 0; i <= maxNumber; i += 2) {
    evenNumbers.push(i);
  }

  /**
   * Doar in development
   */
  console.log("Input: ", maxNumber);
  console.log("Output: ", evenNumbers.join(", "));

  return evenNumbers;
};

printEvenNumbers(10);

/**
 * 2. Calculați suma numerelor dintr-un șir de numere
 * Input: [1, -5, 20, -34, 16, 29, 36, -4]
 * Output: 59
 */
const sumOfArrayElements = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  /**
   * Doar in development
   */
  console.log("Input: ", array);
  console.log("Output: ", sum);

  return sum;
};

sumOfArrayElements([1, -5, 20, -34, 16, 29, 36, -4]);

/**
 * 3. Creați o funcție care inversează un șir de numere
 * Input: [1, -5, 20, -34, 16, 29, 36, -4]
 *     0   1
 *    [-4, 36]
 * Output: [-4, 36, 29, 16, -34, 20, -5, 1]
 */
const reverseArray = (array) => {
  const reversedArray = [];

  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[array.length - 1 - i];
  }

  /**
   * Doar in development
   */
  console.log("Input: ", array);
  console.log("Output: ", reversedArray);

  return reversedArray;
};

reverseArray([1, -5, 20, -34, 16, 29, 36, -4]);

/**
 * 4. Returnează numărul de vocale dintr-un șir de caractere (string)
 * Input: “string de test”
 * Output: 3
 */
const getVowelsCount = (str) => {
  let count = 0;
  const vowels = "aeiou".split("");

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  /**
   * Doar in development
   */
  console.log("Input: ", str);
  console.log("Output: ", count);

  return count;
};

getVowelsCount("string de test");

/**
 * Exemplu pentru "for of" loop
 */
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

const string1 = "M y test string";
console.log(string1.slice(1));

/**
 * 5. Capitalize a word
 * Input: "My Name Is MiChaEl"
 * Output: "My name is micahel"
 */
const capitalizeWord = (str) => {
  const firstLetter = str[0].toUpperCase();
  const word = str.slice(1).toLowerCase();

  console.log("Result:", firstLetter + word);

  return firstLetter + word;
};

capitalizeWord("SHIRE");

const string2 = "string de test";
console.log(string2.match(/[aeiou]/gi));

/**
 * 4. Be polite
 * Input: "horse"
 * Output: "Horse, please"
 */
const backDoorPassword = (str) => {
  const strCapitalized = capitalizeWord(str);

  /**
   * Doar in development
   */
  console.log("Input: ", str);
  console.log("Output: ", `${strCapitalized}, please`);

  return `${strCapitalized}, please`;
};

backDoorPassword("horse");

/**
 * 1. Determine the total number of birds that you counted so far
 * Input: [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
 * Output: 34
 */
const totalBirdCount = (birdsPerDay) => {
  let count = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }

  console.log(`I've seen ${count} birds.`);
  return count;
};

totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]);

/**
 * Calculate the number of visiting birds in a specific week
 * Input: [2, 5, 0, 7, 4, 1, 3,   0, 2, 5, 0, 1, 3, 1]
 *         0  1  2  3  4  5  6    7,  14, 21 , ...
 * Output: 12
 */
const birdsInWeek = (birdsPerDay, weekNumber) => {
  const weeks = [];

  for (let i = 0; i < weekNumber; i++) {
    if (i === 0) {
      weeks.push(birdsPerDay.slice(0, 7));
    } else if (i === 1) {
      weeks.push(birdsPerDay.slice(7, 14));
    } else {
      const x = 7 * i;
      const y = 7 * (i + 1);

      weeks.push(birdsPerDay.slice(x, y));
    }
  }

  totalBirdCount(weeks[weekNumber - 1]);
};

/**
 * SOLUTIE ELEGANTA
 * Calculate the number of visiting birds in a specific week
 * Input: [2, 5, 0, 7, 4, 1, 3,   0, 2, 5, 0, 1, 3, 1]
 *         0  1  2  3  4  5  6    7,  14, 21 , ...
 * Output: 12
 */
function birdsInWeek2(birdsPerDay, week) {
  const weekIndex = (week - 1) * 7;
  return totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7));
}

/**
 * 3. Fix a counting mistake
 * Input: [2, 5, 0, 7, 4, 1];
 * Output: [3, 5, 1, 7, 5, 1]
 */
const fixBirdCountLog = (birdsPerDay) => {
  const fixedLog = [];
  console.log("Input:", birdsPerDay);

  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i === 0) {
      const fixedItem = (birdsPerDay[i] += 1);
      fixedLog.push(fixedItem);
    } else {
      const isEven = i % 2 === 0; // avem un numar par
      if (isEven) {
        const fixedItem = (birdsPerDay[i] += 1);
        fixedLog.push(fixedItem);
      } else {
        fixedLog.push(birdsPerDay[i]);
      }
    }
  }

  console.log("Output:", fixedLog);

  return fixedLog;
};

fixBirdCountLog([2, 5, 0, 7, 4, 1]);
