//get data is gonna receive some type T. we are passing a url type string, and the promise will
//resolve with some type T

export const getData = async <T>(url: string): Promise<T> => {
	const response = await fetch(url);
	return await response.json();
};
