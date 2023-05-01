/* 
	Задание 4.
	Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на 
	прототипах.
	Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
	Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
	какими свойствами он обладает.

	1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
	2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
	3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
	4. Создать экземпляры каждого прибора.
	5. Вывести в консоль и посмотреть результаты работы.
*/

function Device(name, power) {
	this.name = name;
	this.power = power;
	this.isPlugged = false;
}

Device.prototype.swichPlug = function() {
	this.isPlugged = !this.isPlugged;
}

Device.prototype.printPlug = function() {
	if (this.isPlugged) {
		console.log('Устройство "' + this.name + '" подключено.');
	} else {
		console.log('Устройство "' + this.name + '" выключено.');
	}
}

// Настольная лампа
function Lamp(name, power, brand, lightType, brightness) {
	this.name = name;
	this.power = power;
	this.brand = brand;
	this.lightType = lightType;
	this.brightness = brightness;
}

Lamp.prototype = new Device();

// Компьютер
function Computer(name, power, cpu, ram, gpu) {
	this.name = name;
	this.power = power;
	this.cpu = cpu;
	this.ram = ram;
	this.gpu = gpu;
}

Computer.prototype = new Device();

const tableLamp = new Lamp('Настольная лампа', 10, 'Camelion', 'LED', 60);
const homeComputer = new Computer('Домашний компьютер', 350, 'Intel i7-10700k', 16, 'Nvidia GTX 1660 Ti');

console.log(tableLamp)
tableLamp.printPlug()
console.log(homeComputer)
homeComputer.printPlug()

// Включаем лампу и компьютер
tableLamp.swichPlug();
homeComputer.swichPlug();

console.log(tableLamp)
tableLamp.printPlug()
console.log(homeComputer)
homeComputer.printPlug()
