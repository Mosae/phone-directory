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

	let style = document.createAttribute('style');
	if (row % 2 !== 0) {
		style.value = 'background-color: #bfbfbf';
	} else {
		style.value = 'background-color: white';
	}

	//I could add an id to tbody to get it by id
	let table = document.getElementById('list');

	let newRow = table.insertRow(row);
	newRow.setAttributeNode(style);

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);

	cell1.innerHTML = name;
	cell2.innerHTML = number;
	cell3.innerHTML = email;

	row++;
	//check if counter is odd or even then set a different background

	resetInput();
}

function resetInput() {
	document.getElementById('name').value = '';
	document.getElementById('mobile').value = '';
	document.getElementById('email').value = '';
	error.style.display = 'none';
}

///sorting function
// function sortCol() {
// 	let table, rows, switching, i, x, y, shouldSwitch;
// 	table = document.getElementById('summaryTable');
// 	switching = true;

// 	while (switching) {
// 		switching = false;
// 		rows = table.rows;

// 		for (let i = 1; i < rows.length - 1; i++) {
// 			shouldSwitch = false;
// 			// x = rows[i].getElementByTagName('nameColumn')[0];
// 			x = rows[i].getElementByTagName('td')[0];
// 			console.log(x);
// 			y = rows[i + 1].getElementByTagName('td')[0];

// 			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
// 				shouldSwitch = true;
// 				break;
// 			}
// 		}
// 		if (shouldSwitch) {
// 			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
// 			switching = true;
// 		}
// 	}
// }

function sortTableByCol(table, column, asc = true) {
	const dirModifier = asc ? 1 : -1;
	const tBody = table.tBodies[0];
	const rows = Array.from(tBody.querySelectorAll('tr'));

	// Sort each row
	const sortedRows = rows.sort((a, b) => {
		console.log(a);
		console.log(b);
	});
}

sortTableByCol(document.querySelector('table'), 1);
