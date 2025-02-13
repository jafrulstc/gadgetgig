import type { FilterItemsType, ProductFieldType } from "~/components/filter_products/filter_products";

const priceFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {

    if (filterItems.priceRange.maxPrice === '' && filterItems.priceRange.minPrice === '') {
        return products;

    } else if (filterItems.priceRange.maxPrice !== '' && filterItems.priceRange.minPrice !== '') {
        return products.filter(
            (product) =>
                product.price >= Number(filterItems.priceRange.minPrice) &&
                product.price <= Number(filterItems.priceRange.maxPrice)
        );
    } else if (filterItems.priceRange.maxPrice === '') {

        return products.filter(
            (product) => product.price >= Number(filterItems.priceRange.minPrice)
        );
    } else {

        return products.filter(
            (product) => product.price <= Number(filterItems.priceRange.maxPrice)
        );
    }
};

const ramFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.ram.length > 0) {
        return products.filter((product) => filterItems.ram.includes(product.ram));
    }
    else {
        return products;
    }
};


const storageFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.storage.length > 0) {
        const data = products.filter((product) => filterItems.storage.includes(product.storage));
        return data;
    }
    else {
        return products;
    }
};

const displayTypeFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.displayType.length > 0) {
        return products.filter((product) => filterItems.displayType.includes(product.display_type));
    }
    else {
        return products;
    }
};

const shapeFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.shape.length > 0) {
        return products.filter((product) => filterItems.shape.includes(product.shape));
    }
    else {
        return products;
    }
};

const regionFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.region.length > 0) {
        return products.filter((product) => filterItems.region.includes(product.region));
    }
    else {
        return products;
    }
};

const chipsetFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.chipset.length > 0) {
        return products.filter((product) => filterItems.chipset.includes(product.chipset));
    }
    else {
        return products;
    }
};

const operatingSystemFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    if (filterItems.operatingSystem.length > 0) {
        return products.filter((product) => filterItems.operatingSystem.includes(product.operating_system));
    }
    else {
        return products;
    }
};

const lowToHigh = (products: ProductFieldType[])=> {
    const sortedProducts = products.sort((a, b) => a.price - b.price);

    return sortedProducts;
};

const HighToLow = (products: ProductFieldType[])=> {
    const sortedProducts = products.sort((a, b) => b.price - a.price);

    return sortedProducts;
};

const allProductsFilter = (products: ProductFieldType[], filterItems: FilterItemsType) => {
    const filterData = { data: products } 

    filterData.data = priceFilter(filterData.data, filterItems);
    filterData.data = ramFilter(filterData.data, filterItems);
    filterData.data = storageFilter(filterData.data, filterItems);
    filterData.data = displayTypeFilter(filterData.data, filterItems);
    filterData.data = shapeFilter(filterData.data, filterItems);
    filterData.data = regionFilter(filterData.data, filterItems);
    filterData.data = chipsetFilter(filterData.data, filterItems);
    filterData.data = operatingSystemFilter(filterData.data, filterItems);

    return filterData.data;
}

export { allProductsFilter, lowToHigh, HighToLow };