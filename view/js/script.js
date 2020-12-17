// JS code goes here
const names = document.getElementById('name');
const mobile = document.getElementById('mobile');
const submit = document.getElementById('submit');
const error = document.getElementById('error');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	//alert(error);
	// if (typeof names === 'undefined' || names === null || names === '') {
	// 	alert('please fill in name');
	// } else {
	// 	alert('doenst exist');
	// }
});
//check if name exists
function validateForm(input) {
	if (input.value.length == 0) {
		alert('fill in name');
		return false;
	}
	return true;
}
