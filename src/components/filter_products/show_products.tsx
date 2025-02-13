import { component$, $, useContext } from "@builder.io/qwik";
import productImage from "~/asset/images/products/Galaxy_S22_Ultra_Red.webp";
// import ProductCard from "~/components/products/product_card";
import { filterProductsApi } from "~/components/filter_products/filter_products";
import type { ProductFieldType } from "~/components/filter_products/filter_products";

const ShowProducts = component$(() => {
    const filteredData = useContext(filterProductsApi);



    // useTask$(async ({ track }) => {
    //     // Track changes in priceRange and the store's products.
    //     track(() => filterItems.priceRange.minPrice);
    //     track(() => filterItems.priceRange.maxPrice);
    //     track(() => storeData.products);

    //     // Await the priceFilter QRL since it returns a Promise<ProductFieldType[]>
    //     let newProducts:ProductFieldType[] = await priceFilter();
    //     newProducts = await ramFilter(newProducts);


    //     // Apply additional RAM filtering if `filterItems.ram` is not empty.
    //     if (filterItems.ram.length > 0) {
    //         console.log("ram length is : ", filterItems.ram.length);
    //         newProducts = newProducts.filter((product) =>
    //             filterItems.ram.includes(product.ram)
    //         );
    //     }

    //     // Update the filtered data.
    //     filteredData.products = newProducts;
    // });




    const productCard = $((productImage: string, productName: string, productPrice: number, productRam: string, product: ProductFieldType) => {
        return (
            <div class="w-full h-full font-sans font-semibold pb-4 text-[13px] transition-all ease-linear duration-300 transform hover:scale-105">
                <div>{product.name}</div>
                <div>{product.brand}</div>
                <div>{product.chipset}</div>
                <div>{product.display_type}</div>
                <div>{product.operating_system}</div>
                <div>{product.region}</div>
                <div>{product.shape}</div>
                <div>{product.storage}</div>
                {/* <div class="image max-w-[90%] h-[70%] m-auto ">
                    <img width="100" height="100" src={productImage} alt="iphone12" class="w-[83%] h-[89%] m-auto
                        @xl:w-[150px] @xl:h-[150px]
                    " />
                </div> */}

                <div class="w-full px-2 pt-2 flex justify-between">
                    <div class="title">
                        <h3 class="h-12 hover:text-red-400">{productRam}</h3>
                    </div>
                    <div class="price px-2 text-red-400">
                        {productPrice}
                    </div>
                </div>
                <div class="w-full flex justify-start gap-2 uppercase">
                    <button class="max-w-20 bg-red-500 cursor-pointer text-white rounded px-3 py-2 text-[10px] active:bg-gray-400 active:text-white 
                xl:px-3
                lg:px-2
                md:px-[6px]
            ">Add to Cart</button>
                    <button class="max-w-20 cursor-pointer  text-gray-400 rounded border border-solid border-red-500 px-3 py-2 text-[10px] transition-all duration-200 ease-linear hover:bg-red-500 hover:text-white
                xl:px-3
                lg:px-2
                md:px-[6px]
            ">Buy Now</button>
                </div>
            </div>
        )
    })
    return (
        <>
            {filteredData.products.map((product) => (
                <div key={product.id} class="product lg:max-h-96 xl:w-full overflow-hidden p-3 bg-white 
            @2xl:h-[270px]

        ">
                    {productCard(productImage, product.name, product.price, product.ram, product)}
                    {/* <ProductCard productImage={productImage} productName={product.productName} productPrice={product.price} /> */}

                </div>
            ))}
        </>
    )
})


export default ShowProducts;