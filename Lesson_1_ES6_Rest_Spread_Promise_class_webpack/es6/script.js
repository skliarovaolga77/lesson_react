

//ES6 ПЕРЕМЕННЫЕ, СТРОКИ, ФУНКЦИИ
const pow = a => a + 4;
console.log(pow(5));

const powA = (a, b) => a + b;

console.log(powA(5, 10));

const multy = (a, b) => a + b;
console.log(multy(2, 5));

//Rest, Spread, Деструктуризация

function foo() {
	// eslint-disable-next-line prefer-rest-params
	console.log(arguments);
}
foo(1, 2, 3, 4);

function foo2(a, b, ...args) {
	console.log(args); //3,4
	console.log(a);
	console.log(b);
}
foo2(1, 2, 3, 4);


const  arr = [1, 2, 3];
const multyArr = (x, y, z) => x + y + z;
console.log(multyArr(...arr)); // Получим сумму - 6
console.log(arr); // Получим массив
console.log(...arr); // Получим - 1 2 3

const  arr2 = [4, 5, 6];
const [q, , , r = 10] = arr2;
console.log(arr2); // Получим массив  [4, 5, 6]
console.log(q); //4
console.log(r);// Получим 10

const arr3 = ['hi', '5', 'привет', 'друзья', '!'];
const [u, i, ...newArr3] = arr3;  //Деструктуризация
console.log(...newArr3); //привет друзья !
console.log(u); //hi
console.log(i); //5



//Обьекты

// const obj = {
// 	firstname: 'Olga',
// 	lastname: 'Skliarova',
// };

// const { firstname, lastname, sdf = ' Анатольевна' }  = obj; //Деструктуризация
// console.log(firstname, lastname, sdf);
// console.log(lastname);
// console.log(sdf);

const obj2 = {
	firstname: 'Olga',
	lastname: 'Skliarova',
	film: ['film', ' kino', 'anons'],
	actor: {
		oneactor: 'anna',
		twooactor:  'gleb',
	},
};
const {firstname, lastname, film: [one, , two], actor: {oneactor, twooactor}} = obj2;
console.log(one, firstname, lastname, two,); //film Olga Skliarova anons
console.log(two);// anons
console.log(oneactor, twooactor, firstname, lastname,);  //anna gleb Olga Skliarova


//взять данные из obj2 и сделать новую const
// const showAgent = agent => {
// 	const {
// 		firstname,
// 		  actor: {oneactor : firsActor = 'Newactor'}
// 		} = agent;
// 	console.log(firstname, firsActor);
// }
// showAgent(obj2);

//Перенесем вовнуть функции
const showAgent = ({firstname, actor: {twooactor}, film: [one, , two]}) => {

	console.log(firstname, twooactor, one, two);
};
showAgent(obj2);

//Promise и новые возможности Объектов

const sleep = msec =>
	new Promise((resolve, reject) =>
		setTimeout(resolve, msec));

sleep(3000)
	//положительный результат
	.then(() => 'данные получены')
	.then(data => {
		console.log(data); //данные получены
		return 'данные обработаны';
	})
	.then(data => {
		console.log(data); //данные обработаны
	})
	//отрицателный рез-т
	.catch(error => console.error(error));

//новые возможности Объектов
const fname = 'James',
	lname = 'Bond',
	nameProps = 'year';

const objOld = {
	fname,
	lname,
	sayHi() {
		console.log('Hello ' + this.fname);
	}
};
objOld.sayHi();
objOld[nameProps] = 55;

const objNew = {
	fname,
	lname,
	sayHi() {
		console.log(`Hello ${this.fname}`);
	},
	[nameProps] : 45,  //year: 45
};
console.log(objNew);
objNew.sayHi();


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111
//Классы, модули и webpack

function Car (brand, model) {
	this.brand = brand;
	this.model = model;
}
//что бы добавить методы мы добавляли єти етоды в прототип этой ф-ции
Car.prototype.showCar = function (name) {
	console.log('Меня зовут' +  ' ' + name +  ': '+  'моя машина- ' + this.brand
	+ ' ' + this.model) ;
	
}
//далее с помощью оператора созадавали обьект
const mercedes = new Car ('Mercedes-Bens', ' GLC');
// и могли использовать его методы
mercedes.showCar('Артур'); //Меня зовут Артур: моя машина- Mercedes-Bens  GLC


//наследование ,  (если нужно добавить, напр reserve) Если нужно наследовать ф-цию конструктор
//вначале описывали
function ElectroCar (brand, model, reserve) {
	//привязать контекст и передать параметры родителю
	Car.call( this, brand, model);
	//reserve созадаывться будет в этом конструкторе 
	this.reserve = reserve;
}
//после мы должнвы прописать прототип родителя(скопировать)
ElectroCar.prototype = Object.create(Car.prototype); //скопировали прототип
ElectroCar.prototype.constructor = Car;// так же привязывали сам конструктор

//напр. созадем обьект
const tesla = new ElectroCar('Tesla', 'X ', 500);
//на ней будет ездить Роман
tesla.showCar ('Роман');

//теперь перепишем конструкторы на классы
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//класс
class CarNew {
	constructor (brand, model) {
		this.brand = brand;
		this.model = model;
	}
	//ф-цию прописываем тут
	showCarNew(name) {
		console.log(
			`Меня зовут ${name}, моя машина - ${this.brand} ${this.model}  `);
	}
}
const mercedesBens = new CarNew ('Mercedes-Bens', ' Bens');
mercedesBens.showCarNew('Олег'); 

//для наследования исп-м extends
class ElectroCarNew  extends CarNew {
	constructor (brand, model, reserve) {
		//вызываем ф-цию super
		super(brand, model);
		this.reserve = reserve;
	}
}
const teslaNew = new ElectroCarNew('Tesla', 'X ', 500);
teslaNew.showCarNew ('Миша');