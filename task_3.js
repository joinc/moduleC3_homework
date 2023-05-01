/* 
	Задание 3.
	Написать функцию, которая создает пустой объект, но без прототипа.
*/

function CreateObjWithoutProto() {
	return Object.create(null);
}

console.log(CreateObjWithoutProto())
