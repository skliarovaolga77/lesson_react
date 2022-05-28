 const render = data => {
	document.querySelector('.list')
		.innerHTML += `<li>${data}</li>`
}

export default render;// указали что хотим экспортировать по умолчанию render