export const API_DATA = async (filters) => {
	const data = await fetch("./js/data.json");
	var result = await data.json();

	if (filters !== undefined) { 
		if(filters.isVeg !== 'ALL') {
			return result.filter(item => item.veg == Boolean(Number(filters.isVeg)))
		}
	}

	return result
}
export const API_DATA2 = async () => {
	const data = await fetch("./js/data2.json");
	return await data.json();
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57fe9cf178msh4df8457b7141ab8p139edcjsn9181c9893ce9',
		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
	}
};