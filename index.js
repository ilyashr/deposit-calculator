function submitData(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital);
	document.querySelector('.result').innerHTML = `Ваш доход: ${res} руб`;
}

function calculate(sum, day, percent, isCapital) {
	/* TODO: Нужно написать данную функцию */


	/* TODO: Вернуть получившееся значение */
}