const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let lowerCase = str.toLowerCase(); // search input set to lower case for comparison
	results = fruit.filter(fruitItem => fruitItem.toLowerCase().includes(lowerCase)); // check if search item is existent
	return results;
}

function searchHandler(e) {
	e.preventDefault();
	suggestions.innerHTML = ''; // list is cleared before each input so no accumulation happens
	suggestions.classList.remove('has-suggestions'); // remove class before each run
	let inputVal = document.getElementById("fruit").value; // getting input value
	if (inputVal !== '') { // if unput is a letter, etc.
	let results = search(inputVal); // search value runs
	showSuggestions(results, inputVal); // suggestions will be shown to user
	} else {suggestions.innerHTML = '';} // otherwise empty ul is shown
}

function showSuggestions(results, inputVal) {
	for (let val of results) {
		let newLi = document.createElement('li'); // creating li each run
		newLi.classList.add('newLi');
		newLi.innerHTML = val.replace(inputVal,`<b>${inputVal}</b>`); // replace search value with bold search value in search item (fruit)
		suggestions.appendChild(newLi); // appending the li to ul
		}
		suggestions.classList.add("has-suggestions"); // adding class for styling
} 

function useSuggestion(e) {
	e.preventDefault();
	console.log(e.target.nodeName)
	if (e.target.nodeName !== 'LI') {
	input.value = e.target.parentElement.innerText; // bold letter(s) should not get populated
	} else {input.value = e.target.innerText;} // whatever suggestion was clicked on is selected
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);