/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/
var numData = [1, 2, 3, 4, 5, 6];
var names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
var people = [{
        id: '39304075689',
        name: 'Verundijus',
        surname: 'Bauda',
        age: 51
    }, {
        id: '39304075689',
        name: 'Ryja',
        surname: 'Žaneirytė',
        age: 41,
        height: 1.65,
        weight: 55
    }, {
        id: '39304075689',
        name: 'Brudas',
        surname: 'Veilokas',
        age: 11,
        height: 1.45,
        weight: 45
    }];
var printStrings = function (strings) {
    var printString = function (str) { return console.log(str); };
    strings.forEach(printString);
};
var sumNumbers = function (nums) {
    var numberSumReducer = function (sum, num) { return sum + num; };
    return nums.reduce(numberSumReducer, 0);
};
var createPeopleArray = function (p1, p2) { return [p1, p2]; };
console.group('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        var result = sumNumbers(numData);
        console.log({
            numbers: numData,
            result: result
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        var couple = createPeopleArray(people[0], people[1]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        var numbers = [1, -8, -6, 7, 5, 1];
        function addPositiveNumbers(arr) {
            var positiveNumberReducer = function (sum, num) { return (num > 0 ? sum + num : sum); };
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            numbers: numbers,
            sumOfPositiveNumbers: addPositiveNumbers(numbers)
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        /*
          Pvz.:
           * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
           * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
           * ['Loughing', 'Out', 'Loud'] -> LOL
        */
        var acronymReducer_1 = function (acronym, word) { return acronym + word[0]; };
        var createAcronym_1 = function (words) {
            var acronym = words.reduce(acronymReducer_1, '');
            return acronym;
        };
        var dataSamples = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Loughing', 'Out', 'Loud'],
        ];
        dataSamples.forEach(function (words) { return console.log("[".concat(words.join(', '), "] -> ").concat(createAcronym_1(words))); });
    }
    console.groupEnd();
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        var numbersProductReducer_1 = function (product, factor) { return product * factor; };
        var multiplyNumbers_1 = function (numbers) { return numbers.reduce(numbersProductReducer_1, 1); };
        var samples = [
            [1, 7, 8],
            [98, 74, 5, 0],
            [17, 10, 5],
        ];
        var answerObjectReducer_1 = function (answerObject, numbers) {
            var functionName = multiplyNumbers_1.name;
            var functionArgsString = "[".concat(numbers.join(', '), "]");
            var key = "".concat(functionName, "(").concat(functionArgsString, ")");
            var value = multiplyNumbers_1(numbers);
            answerObject[key] = value;
            return answerObject;
        };
        var formatAnswerObject = function (samples) {
            var initialValue = {};
            var result = samples.reduce(answerObjectReducer_1, initialValue);
            return result;
        };
        var answerObject = formatAnswerObject(samples);
        console.log(answerObject);
    }
    console.groupEnd();
}
console.groupEnd();
