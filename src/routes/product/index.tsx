import { component$, useStore, useTask$ } from '@builder.io/qwik';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default component$(() => {
  // Local state for storing products and the price filter value
  const store = useStore({
    products: {allProducts:[] as Product[]},
    filterPrice: '', // this will be used as a string to capture user input
  });

  // Fetch products from Fake Store API when the component loads
  useTask$(async () => {
    // const response = await fetch('https://fakestoreapi.com/products');
    const response = await fetch("http://127.0.0.1:5500/src/api/products/index.json");
    store.products = await response.json();
  });

  // Filter the products based on the user's maximum price input.
  // If no value is provided or if it's invalid, show all products.
  const filteredProducts = store.products.allProducts.filter((product) => {
    if (store.filterPrice.trim() === '') return true;
    const maxPrice = Number(store.filterPrice);
    if (isNaN(maxPrice)) return true;
    return product.price <= maxPrice;
  });

  const tempValue = {min: '', max: ''} ;

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Products</h1>
      
      {/* Price Filter Input */}
      <div class="mb-6">
        <label class="block mb-2 font-medium" for="priceFilter">
          Filter by Price (Max):
        </label>
        <input
          id="priceFilter"
          type="number"
          placeholder="Enter maximum price"
          value={store.filterPrice}
          onInput$={(e) =>
            (tempValue.max = (e.target as HTMLInputElement).value)
          }
          class="border p-2 rounded w-full"
        />
        <button class="w-24 py-2 my-2 rounded-lg text-white bg-blue-500 "
          onClick$={ ()=> {
            store.filterPrice = tempValue.max;
          } }
        >
          Search
        </button>
      </div>

      {/* Display Products */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} class="border rounded shadow p-4">
            <img
              width={100}
              height={100}
              src={product.image}
              alt={product.title}
              class="w-full h-48 object-contain mb-4"
            />
            <h2 class="text-xl font-semibold mb-2">{product.title}</h2>
            <p class="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <p class="text-gray-500 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
