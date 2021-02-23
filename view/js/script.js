function validateForm() {
	const name = document.getElementById('name').value;
	const number = document.getElementById('mobile');
	const email = document.getElementById('email');
	const error = document.getElementById('error');

	if (name.value === '' || number.value === '' || email.value === '') {
		error.style.display = 'block';
		// name.focus();
		return false;
	} else {
		addData();
		// var row = '';
		// row +=
		// 	'<tr><td>' +
		// 	name +
		// 	'</td><td>' +
		// 	number +
		// 	'</td><td>' +
		// 	email +
		// 	'</td></tr>';
		// let tableRef = document.getElementById('list').getElementsByTagName('tbody');
		// let newRow = tableRef.insertRow(tableRef.row.length)
	}

	function addData() {
		//logic to add info
		let table = document.getElementById('list');

		let rowCount = table.rows.length;
		let row = table.insertRow(rowCount);

		//DRY code look to make it cleaner
		let firstCell = row.insertCell();
		let secondCell = row.insertCell(1);
		let thirdCell = row.insertCell(2);

		let firstEle = document.createElement('tr');
		let secondEle = document.createElement('tr');
		let thirdEle = document.createElement('tr');

		firstCell.appendChild(firstEle);
		secondCell.appendChild(secondEle);
		thirdCell.appendChild(thirdEle);
	}
}
