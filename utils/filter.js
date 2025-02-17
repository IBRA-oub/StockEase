 export const filterAndSortProducts = (products, { selectedCity, filter, searchTerm }) => {
    const mappedData = products.map(product => {
        if (selectedCity && selectedCity !== 'All'&& product.stocks) {
            const cityStocks = product.stocks.filter(stock => stock?.localisation?.city === selectedCity);
            if (cityStocks.length > 0) {
                return {
                    ...product,
                    stocks: cityStocks
                };
            }
            return null;
        }
        return product;
    });

    let filteredData = mappedData.filter(product => product !== null);

    if (filter === 'A-Z') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'quantity') {
        filteredData.sort((a, b) => {
            const quantityA = a.stocks?.reduce((sum, stock) => sum + (stock.quantity || 0), 0);
            const quantityB = b.stocks?.reduce((sum, stock) => sum + (stock.quantity || 0), 0);
            return quantityA - quantityB;
        });
    } else if (filter === 'priceAsc') {
        filteredData.sort((a, b) => a.price - b.price);
    } else if (filter === 'priceDesc') {
        filteredData.sort((a, b) => b.price - a.price);
    }

    if (searchTerm) {
        filteredData = filteredData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return filteredData;
};
