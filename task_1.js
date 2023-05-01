/* 
	Задание 1.
	Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только 
	собственных свойств. Данная функция не должна возвращать значение.
*/

function PrintProperties(obj) {
	for (let name_prop in obj) {
		if (obj.hasOwnProperty(name_prop)) {
			console.log(`Name properties: ${name_prop} - Value properties: ${obj[name_prop]}`)
		}
	}
}

PrintProperties({ prop_1: 17, prop_2: 23, prop_3: 'string' })
