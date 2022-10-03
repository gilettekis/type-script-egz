/*
  Objektų tipai aprašomi aprašant kiekvieną savybę atskirai. Jeigu savybė nėra privaloma, prie savybės pavadinimo rašome klaustuką
*/
var _a, _b, _c;
// Minimaliai aprašytas Person tipo objektas
var person1 = {
    id: '39304075689',
    name: 'Verundijus',
    surname: 'Bauda',
    age: 51
};
// Pilnai aprašytas Person tipo objektas
var person2 = {
    id: '39304075689',
    name: 'Ryja',
    surname: 'Žaneirytė',
    age: 41,
    height: 1.65,
    weight: 55
};
var person3 = {
    id: '39304075689',
    name: 'Brudas',
    surname: 'Veilokas',
    age: 11,
    height: 1.45,
    weight: 45
};
var createFullname = function (_a) {
    var name = _a.name, surname = _a.surname;
    return "".concat(name, " ").concat(surname);
};
var printCouple = function (p1, p2) {
    var p1Fullname = createFullname(p1);
    var p2Fullname = createFullname(p2);
    console.log("".concat(p1Fullname, " + ").concat(p2Fullname, " = \u2764"));
};
printCouple(person1, person2);
// Atlikite užduotis, funkcijas aprašydami tipais
console.group('1. Sukurkite funkciją kuri patikrina ar žmogus yra pilnametis');
{
    var isAdult = function (p) { return p.age >= 18; };
    console.log((_a = {},
        _a[createFullname(person1)] = isAdult(person1),
        _a[createFullname(person2)] = isAdult(person2),
        _a[createFullname(person3)] = isAdult(person3),
        _a));
}
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri patikrina ar Person tipo objektas turi ūgį ir svorį');
{
    var isFullyDescribedPerson = function (person) { return Boolean(person.height) && Boolean(person.weight); };
    console.log((_b = {},
        _b[createFullname(person1)] = isFullyDescribedPerson(person1),
        _b[createFullname(person2)] = isFullyDescribedPerson(person2),
        _b[createFullname(person3)] = isFullyDescribedPerson(person3),
        _b));
}
console.groupEnd();
console.group('3. Sukurkite funkciją, kuri grąžina žmogaus incialus');
{
    var createInitials = function (p) { return p.name[0] + p.surname[0]; };
    console.log((_c = {},
        _c[createFullname(person1)] = createInitials(person1),
        _c[createFullname(person2)] = createInitials(person2),
        _c[createFullname(person3)] = createInitials(person3),
        _c));
}
console.groupEnd();
