let submit = document.getElementById('submit');
submit.addEventListener('click', displayData);

let row = 1;

function displayData() {
	let name = document.getElementById('name').value;
	let number = document.getElementById('mobile').value;
	let email = document.getElementById('email').value;
	let error = document.getElementById('error');

	if (!name || !number || !email) {
		error.style.display = 'block';
		return false;
	}
	//I could add an id to tbody to get it by id
	let table = document.getElementById('list');

	let newRow = table.insertRow(row);

	//DRY code look to make it cleaner

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);

	cell1.innerHTML = name;
	cell2.innerHTML = number;
	cell3.innerHTML = email;

	row++;
	resetInput();
}

function resetInput() {
	document.getElementById('name').value = '';
	document.getElementById('mobile').value = '';
	document.getElementById('email').value = '';
}
