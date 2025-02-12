// utils.js
export const filterAndSortProducts = (products, { selectedCity, filter, searchTerm }) => {
    const mappedData = products.map(product => {
        if (selectedCity && product.stocks) {
            const cityStocks = product.stocks.filter(stock => stock?.localisation?.city === selectedCity);
            if (cityStocks.length > 0) {
                return {
                    ...product,
                    stocks: cityStocks
                };
            }
        }
        return null;
    });

    let filteredData = mappedData.filter(product => product !== null);

    if (filter === 'A-Z') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'quantity') {
        filteredData.sort((a, b) => a.stocks.quantity - b.stocks.quantity);
    } else if (filter === 'price') {
        filteredData.sort((a, b) => a.price - b.price);
    }

    if (searchTerm) {
        filteredData = filteredData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return filteredData;
};
