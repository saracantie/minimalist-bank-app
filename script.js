'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//arrays are objects, so have acess to METHODS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE METHOD
console.log(arr.slice(2)); //igual em string, retorna NOVO array com a parte a parte do [2]
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); //o ultimo elemento d qqr array com -1
console.log(arr.slice(1, -2));
console.log(arr.slice()); //copia exata do array, igual a:
console.log([...arr]);

//SPLICE METHOD
//IGUAL SLICE MAS MUDA O ARRAY ORIGINAL
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr); //mudou o original

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2); //MUDA O ORIGINAL

//CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters); //igual a:
console.log(...arr, ...arr2);

//JOIN
console.log(letters.join('-'));


//AT METHOD
const arr = [23, 11, 64];
console.log(arr.at(0)); //igual a:
console.log(arr[0]);

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]); //se quer saber o ultimo usar o at eh melhor:
console.log(arr.at(-1));


//LOOP AN ARRAY USING FOREACH METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposites ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('-------FOREACH-------');
movements.forEach(function (movement, index, array) {
  if (mov > 0) {
    console.log(`you deposites ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)
//...
*/

//USING FOREACH WITH MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//USING FOREACH WITH SETS:
const currenciesUnique = new Set(['USD', 'GPD', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});
//aqui o KEY nao serve p nd, 'e igual value
