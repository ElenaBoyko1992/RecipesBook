function showIngredients(obj) {
	const arrOfIngredients = []
	for (const value in obj) {
		const substr = value.slice(0, 13);
		if (substr === 'strIngredient' && obj[value] !== '') {
			arrOfIngredients.push(obj[value])
		}
	}
	return arrOfIngredients.join(', ')
}

export default showIngredients