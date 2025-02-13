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
        products: { allProducts: [] as Product[] },
        filterPrice: '', // this will be used as a string to capture user input
    });

    // Fetch products from Fake Store API when the component loads
    useTask$(async () => {
        // const response = await fetch('https://fakestoreapi.com/products');
        const response = await fetch("http://127.0.0.1:5500/src/api/products/index.json");
        store.products = await response.json();
    });

    const filteredProducts = store.products.allProducts.filter((product) => {
        if (store.filterPrice.trim() === '') return true;
        const maxPrice = Number(store.filterPrice);
        if (isNaN(maxPrice)) return true;
        return product.price <= maxPrice;
    });

    const tempValue = { min: '', max: '' };

    return (
        <div class="bg-[#EDF2F6] max-w-[1320px] mx-auto">
            {/* filter end */}

            <main class="mx-auto w-full px-4 sm:px-6 lg:px-8">


                <section class="pt-6 pb-10">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* <!-- Filters --> */}

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
                                onClick$={() => {
                                    store.filterPrice = tempValue.max;
                                }}
                            >
                                Search
                            </button>
                        </div>

                        <div class="lg:col-span-3">
                            <div class="w-full grid grid-cols-4 gap-3 
                                md:grid md:grid-cols-4 md:gap-3
                                sm:grid sm:grid-cols-3
                                @2xl:grid @2xl:grid-cols-3 @2xl:gap-2
                                @xl:grid-cols-2 @xl:gap-3
                                @md:grid-cols-1
                                
                            ">


                                {filteredProducts.map((product) => (
                                    <div key={product.id} class="product lg:max-h-96 xl:w-full overflow-hidden p-3 bg-white 
                                        @2xl:h-[270px]
                    
                                    ">
                                        {/* <ProductCard productImage={productImage} productName={item.productName} productPrice={item.price} /> */}

                                        <div class="w-full h-full font-sans font-semibold pb-4 text-[13px] transition-all ease-linear duration-300 transform hover:scale-105">
                                            <div class="image max-w-[90%] h-[70%] m-auto ">
                                                <img width="100" height="100" src={product.image} alt="iphone12" class="w-[83%] h-[89%] m-auto
                                        @xl:w-[150px] @xl:h-[150px]
                                    " />
                                            </div>
                                            <div class="w-full px-2 pt-2 flex justify-between">
                                                <div class="title">
                                                    <h3 class="h-12 hover:text-red-400">{product.title}</h3>
                                                </div>
                                                <div class="price px-2 text-red-400">
                                                    {product.price.toFixed(2)}
                                                </div>
                                            </div>
                                            <div class="w-full flex justify-start gap-2 uppercase">
                                                <button type="button" class="max-w-20 bg-red-500 cursor-pointer text-white rounded px-3 py-2 text-[10px] active:bg-gray-400 active:text-white 
                                                    xl:px-3
                                                    lg:px-2
                                                    md:px-[6px]
                                                ">Add to Cart</button>
                                                <button type="button" class="max-w-20 cursor-pointer  text-gray-400 rounded border border-solid border-red-500 px-3 py-2 text-[10px] transition-all duration-200 ease-linear hover:bg-red-500 hover:text-white
                                                    xl:px-3
                                                    lg:px-2
                                                    md:px-[6px]
                                                ">Buy Now</button>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </section>
            </main>
        </div >
    );
});
