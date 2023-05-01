/* 
	Задание 4.
	Переписать консольное приложение из Задания 4 на классы.
*/

class Device {
	constructor(name, power) {
		this.name = name;
		this.power = power;
		this.isPlugged = false;
	}
	swichPlug() {
		this.isPlugged = !this.isPlugged;	
	}
	printPlug() {
		if (this.isPlugged) {
			console.log('Устройство "' + this.name + '" подключено.');
		} else {
			console.log('Устройство "' + this.name + '" выключено.');
		}
	}
}

// Настольная лампа
class Lamp extends Device {
	constructor(name, power, brand, lightType, brightness) {
		super(name, power);
		this.brand = brand;
		this.lightType = lightType;
		this.brightness = brightness;
	}
}

// Компьютер
class Computer extends Device {
	constructor(name, power, cpu, ram, gpu) {
		super(name, power);
		this.cpu = cpu;
		this.ram = ram;
		this.gpu = gpu;
	}
}

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
