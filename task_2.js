/*
	Задание 2.
	Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у 
	переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

function CheckPropertyObject(obj, name_prop) {
    return name_prop in obj
}

console.log(CheckPropertyObject({ prop_1: 17, prop_2: 23, prop_3: 'string' }, 'prop_1'))
console.log(CheckPropertyObject({ prop_1: 17, prop_2: 23, prop_3: 'string' }, 'prop_4'))
