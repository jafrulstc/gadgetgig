
// import { component$, createContextId, useContextProvider, useSignal, useStore, useTask$ } from "@builder.io/qwik";
// import { FilterCreate, FilterMinMax, FilterSidebarCreate, FilterSidebarMinMax } from "./filter_components";



// // import image start
// import ShowProducts from "~/components/products/show_products";
// import UserChoiceProduct from "./filter_fnc";


// // import image end
// import { productImage } from '~/asset/images/products/Galaxy_S22_Ultra_Red.webp';

// interface ProductFieldType {
//     product_id: string,
//     product_name: string,
//     brand_name: string,
//     model: string,
//     price: number,
//     region: string,
//     display_type: string,
//     shape: string,
//     storage: string,
//     chipset: string, 
//     operating_system: string
//     image: string

// }


// // interface GadgetFilters: {
// //     filterOptions: {
// //         brands: string[];
// //         region: string[];
// //         displayType: string[];
// //         shape: string[];
// //         ram: string[];
// //         storage: string[];
// //         chipset: string[];
// //         operatingSystem: string[];
// //     }
// // }

// interface ProductType {
//     products: Record<number, ProductFieldType>;
// }

// interface ProductDataType {
//     allProducts: ProductType[];
//     popular: ProductType[];
//     topSelling: ProductType[];
//     topPricing: ProductType[];
//     discount: ProductType[];
// }

// interface FilterOptionType {
//     priceRange: { minPrice: string, maxPrice: string },
//     trending: {
//         popular: boolean,
//         topSelling: boolean,
//         topPricing: boolean,
//         discount: boolean,

//     };
// }

// export const storeApi = createContextId<{products:ProductType}>("storeData");
// export const filterOptionApi = createContextId<FilterOptionType>("filterOption");
// export const filterProductsApi = createContextId<{products:ProductType[]}>("filteredProducts");

// const FilterProducts = component$(() => {
//     const gadgetFilters2 = useStore({ sort: false, brand: false, ram: false, storage: false, display_type: false, region: false, chipset: false, shape: false });
//     const brands = [ 'Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Google', 'Oppo', 'Sony', 'Realme', 'Vivo', 'Infinix', 'Poco', 'Huawei', 'Honor', 'Asus', 'Motorola', 'Nokia', 'LG', 'Lenovo' ]
//     const region = [ 'us', 'china', 'uk', 'singapur', 'india' ];
//     const displayType = [ 'AMOLED', 'OLED', 'Fluid AMOLED', 'LTPO OLED', 'Dynamic AMOLED', 'Super AMOLED', 'LCD', 'IPS LCD', 'P-OLED' ];
//     const shape = [ 'Rectangle', 'Foldable' ];
//     const ram = [ '12GB', '6GB', '8GB', '16GB', '4GB', '3GB' ];
//     const storage = [ '256GB', '128GB', '512GB', '64GB' ];
//     const chipset = [ 'Exynos 2200', 'A17 Bionic', 'Snapdragon 8 Gen 2', 'Tensor G3', 'Exynos 990', 'Snapdragon 8 Gen 1', 'Dimensity 9200', 'MediaTek Dimensity 1080', 'Dimensity 920', 'MediaTek Dimensity 920', 'Snapdragon 695', 'Kirin 9000', 'Dimensity 1300', 'Snapdragon 8+ Gen 1', 'Dimensity 8100', 'Snapdragon 870', 'A15 Bionic', 'Snapdragon 888', 'Snapdragon 680', 'Dimensity 900', 'Unisoc T616', 'Exynos 1380', 'Snapdragon 778G', 'Snapdragon 4 Gen 1', 'Exynos 1280', 'Snapdragon 480 5G', 'Snapdragon 778G+', 'Snapdragon 765G', 'Tensor', 'MediaTek Helio G37', 'Snapdragon 888+' ];
//     const operatingSystem = [ 'Android 14', 'iOS 17', 'MIUI 14', 'OxygenOS 13', 'Android 11', 'ColorOS 12', 'Android 12', 'Realme UI 3.0', 'Funtouch OS 13', 'MIUI 13', 'XOS 12', 'HarmonyOS 2', 'Magic UI 7.0', 'Funtouch OS 12', 'Android 13', 'Realme UI 4.0', 'ColorOS 12.1', 'iOS 16', 'MIUI 12.5', 'Realme UI 2.0', 'iOS 15', 'ColorOS 11', 'HarmonyOS 3', 'Android 10' ];


//     const gadgetFilters: {
//         filterOptions: {
//             brands: string[];
//             region: string[];
//             displayType: string[];
//             shape: string[];
//             ram: string[];
//             storage: string[];
//             chipset: string[];
//             operatingSystem: string[];
//         };
//     } = {
//         filterOptions: {
//             brands: [],
//             region: [],
//             displayType: [],
//             shape: [],
//             ram: [],
//             storage: [],
//             chipset: [],
//             operatingSystem: []
//         }
//     };

//     // Loop through each key in `filterOptions`
//     // for (let key of Object.keys(gadgetFilters.filterOptions) as (keyof typeof gadgetFilters.filterOptions)[]) {
//     //     // Ensure it's an array before applying further logic
//     //     if (Array.isArray(gadgetFilters.filterOptions[key])) {
//     //         const d = 4;  // You can add your logic here as needed
//     //         console.log(key, d);  // Example usage
//     //     }
//     // }



//     const featuredSelections = useSignal(true); 
//     const collectionHide = useSignal(false);
//     const storageHide = useSignal(false);
//     const brandHide = useSignal(false);
//     const sortBy = useSignal(false);
//     const closeMenu = useSignal(true);

//     const collectItems = ["Today", "This Week", "This Month"];
//     const brandItems = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Asus", "Nokia", "Motorola", "Google", "Sony", "LG", "HTC", "Lenovo", "Huawei", "Micromax", "Blackberry", "Panasonic", "Lava", "Karbonn", "Gionee", "Infinix", "Intex", "iBall", "Jio", "LeEco", "Meizu", "Micromax", "Mobiistar", "Nubia", "Poco", "Qiku", "Spice", "Tecno", "TCL", "Ulefone", "Wiko", "YU", "ZTE"];
//     const storageItems = ["4/64", "8/64", "8/128", "12/256", "16/256"];
//     const featuredSelectionsItems = ["Popular", "Top Selling", "Top Pricing", "Discount"];

//     // const storeProducts = useStore<{ products: ProductDataType }>({ products: { allProducts: [], popular: [], topSelling: [], topPricing: [], discount: [] } });
//     const storeProducts = useStore<ProductType>( { products: {} } );  

//     // const filterData = useStore( { featuredSelections: true, collectionHide: false, storageHide: false, brandHide: false, sortBy: false, closeMenu: true } );
//     const filteredProducts = useStore<ProductType>(  { products: storeProducts.products } );

//     const filterOptions = useStore({
//         priceRange: { minPrice: '', maxPrice: '' },
//         trending: {
//             popular: false,
//             topSelling: false,
//             topPricing: false,
//             discount: false
//         }
//     } );

//     // useContextProvider(storeApi, storeProducts);
//     // useContextProvider(filterOptionApi, filterOptions);
//     // useContextProvider(filterProductsApi, filteredProducts);

//     useTask$(async () => {
//         const res = await fetch("http://127.0.0.1:5500/src/api/products/index.json");
//         storeProducts.products = await res.json();
//         // filteredProducts.products = storeProducts.products.allProducts
//         filteredProducts.products = storeProducts.products;


//     });

//     return (
//         <div class="bg-[#EDF2F6] max-w-[1320px] mx-auto">
//             <div class={` ${closeMenu.value ? "hidden" : "block"} `}>
//                 {/* filter start */}
//                 {/* <div class="fixed inset-0 bg-black/25" aria-hidden="true"></div> */}

//                 <div class="fixed inset-0 z-40 flex"
//                 >

//                     <div class="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                         <div
//                             class="flex items-center justify-between px-4"
//                             onClick$={() => closeMenu.value = true}
//                         >
//                             <h2 class="text-lg font-medium text-gray-900">Filters</h2>
//                             <button type="button" class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
//                                 <span class="sr-only">Close menu</span>
//                                 <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>

//                         {/* <!-- Filters --> */}
//                         <div class="mt-4 border-t border-gray-200">
//                             {/* <FilterSidebarMinMax /> */}
//                            {/*  <FilterSidebarCreate title="Featured Selections" itemList={featuredSelectionsItems} signal={featuredSelections} />
//                             <FilterSidebarCreate title="Collections" itemList={collectItems} signal={collectionHide} />
//                             <FilterSidebarCreate title="Brand" itemList={brandItems} signal={brandHide} />
//                             <FilterSidebarCreate title="Storage" itemList={storageItems} signal={storageHide} />
//                             */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* filter end */}

//             <main class="mx-auto w-full px-4 sm:px-6 lg:px-8">
//                 <div class="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
//                     <h1 class="text-4xl font-bold tracking-tight text-gray-900
//                     @md:text-xl
//                     ">Phone & Tab</h1>

//                     <div class="flex items-center">
//                         <div class="relative inline-block text-left">
//                             <div
//                                 onClick$={() => sortBy.value = !sortBy.value}
//                             >
//                                 <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
//                                     Sort
//                                     <svg class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
//                                         <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
//                                     </svg>
//                                 </button>
//                             </div>

//                             <div class={` ${sortBy.value ? "visible opacity-100 h-max" : "h-0 invisible opacity-0"} absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 focus:outline-hidden `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
//                                 <div class="py-1" role="none">

//                                     <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-0">Most Popular</a>
//                                     <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-1">Best Rating</a>
//                                     <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-3">Low to High</a>
//                                     <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-4">High to Low</a>
//                                 </div>
//                             </div>
//                         </div>

//                         <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
//                             <span class="sr-only">View grid</span>
//                             <svg class="size-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
//                                 <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z" clip-rule="evenodd" />
//                             </svg>
//                         </button>
//                         <button
//                             type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                             onClick$={() => closeMenu.value = false}
//                         >
//                             <span class="sr-only">Filters</span>
//                             <svg class="size-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
//                                 <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clip-rule="evenodd" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 <section aria-labelledby="products-heading" class="pt-6 pb-10">
//                     <h2 id="products-heading" class="sr-only">Products</h2>

//                     <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//                         {/* <!-- Filters --> */}

//                         <div class=" bg-white hidden p-3 lg:block">
//                             {/* <FilterMinMax /> */}
//                             {/* <FilterCreate title="Featured Selections" itemList={featuredSelectionsItems} signal={featuredSelections} />
//                             <FilterCreate title="Collections" itemList={collectItems} signal={collectionHide} />
//                             <FilterCreate title="Brand" itemList={brandItems} signal={brandHide} />
//                             <FilterCreate title="Storage" itemList={storageItems} signal={storageHide} /> */}

//                         </div>
//                         <div class="lg:col-span-3">
//                             <div class="w-full grid grid-cols-4 gap-3 
//                                 md:grid md:grid-cols-4 md:gap-3
//                                 sm:grid sm:grid-cols-3
//                                 @2xl:grid @2xl:grid-cols-3 @2xl:gap-2
//                                 @xl:grid-cols-2 @xl:gap-3
//                                 @md:grid-cols-1

//                             ">

//                                 {
//                                     // <UserChoiceProduct />
//                                 //    <ShowProducts />
//                                 }

//                             </div>

//                         </div>

//                     </div>

//                 </section>
//             </main>
//         </div >
//     )
// });

// export default FilterProducts;
// export type { ProductType, FilterOptionType }


import { component$, createContextId, useContextProvider, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { FilterCreate, FilterMinMax, FilterSidebarCreate, FilterSidebarMinMax } from "~/components/filter_products/filter_components";
import ShowProducts from "~/components/filter_products/show_products";

import { HighToLow, lowToHigh } from "./filter_fnc";


export interface PriceFilterType {
    minPrice: string,
    maxPrice: string,
}
export interface ProductFieldType {
    id: string,
    name: string,
    brand: string,
    model: string,
    price: number,
    region: string,
    display_type: string,
    shape: string,
    ram: string,
    storage: string,
    chipset: string,
    operating_system: string
    image: string

}

export interface FilterItemsType {
    priceRange: PriceFilterType,
    ram: string[],
    storage: string[],
    displayType: string[],
    shape: string[],
    region: string[],
    chipset: string[],
    operatingSystem: string[],
}

export const priceApi = createContextId<PriceFilterType>("priceApi");
export const storeApi = createContextId<{ products: ProductFieldType[] }>("storeApi");
export const filterProductsApi = createContextId<{ products: ProductFieldType[] }>("filterProductsApi");
export const filterItemsApi = createContextId<FilterItemsType>("filterItemsApi");

const FilterProducts = component$(() => {

    const ramSignal = useSignal(true);
    const storageSignal = useSignal(false);
    const displayTypeSignal = useSignal(false);
    const shapeSignal = useSignal(false);
    const regionSignal = useSignal(false);
    const chipsetSignal = useSignal(false);
    const operatingSystemSignal = useSignal(false);

    const closeMenu = useSignal(true);
    const sortBy = useSignal(false);

    // const storageHide = useSignal(false);
    // const brandHide = useSignal(false);

    // const collectItems = ["Today", "This Week", "This Month"];
    // const brandItems = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Asus", "Nokia", "Motorola", "Google", "Sony", "LG", "HTC", "Lenovo", "Huawei", "Micromax", "Blackberry", "Panasonic", "Lava", "Karbonn", "Gionee", "Infinix", "Intex", "iBall", "Jio", "LeEco", "Meizu", "Micromax", "Mobiistar", "Nubia", "Poco", "Qiku", "Spice", "Tecno", "TCL", "Ulefone", "Wiko", "YU", "ZTE"];
    // const storageItems = ["4/64", "8/64", "8/128", "12/256", "16/256"];
    // const featuredSelectionsItems = ["Popular", "Top Selling", "Top Pricing", "Discount"];


    // const brandsList = ['Samsung', 'Apple', 'Xiaomi', 'OnePlus', 'Google', 'Oppo', 'Sony', 'Realme', 'Vivo', 'Infinix', 'Poco', 'Huawei', 'Honor', 'Asus', 'Motorola', 'Nokia', 'LG', 'Lenovo']
    
    const regionList = ['us', 'china', 'uk', 'singapur', 'india'];
    const displayTypeList = ['AMOLED', 'OLED', 'Fluid AMOLED', 'LTPO OLED', 'Dynamic AMOLED', 'Super AMOLED', 'LCD', 'IPS LCD', 'P-OLED'];
    const shapeList = ['Rectangle', 'Foldable'];
    const ramList = ['12GB', '6GB', '8GB', '16GB', '4GB', '3GB'];
    const storageList = ['256GB', '128GB', '512GB', '64GB'];
    const chipsetList = ['Exynos 2200', 'A17 Bionic', 'Snapdragon 8 Gen 2', 'Tensor G3', 'Exynos 990', 'Snapdragon 8 Gen 1', 'Dimensity 9200', 'MediaTek Dimensity 1080', 'Dimensity 920', 'MediaTek Dimensity 920', 'Snapdragon 695', 'Kirin 9000', 'Dimensity 1300', 'Snapdragon 8+ Gen 1', 'Dimensity 8100', 'Snapdragon 870', 'A15 Bionic', 'Snapdragon 888', 'Snapdragon 680', 'Dimensity 900', 'Unisoc T616', 'Exynos 1380', 'Snapdragon 778G', 'Snapdragon 4 Gen 1', 'Exynos 1280', 'Snapdragon 480 5G', 'Snapdragon 778G+', 'Snapdragon 765G', 'Tensor', 'MediaTek Helio G37', 'Snapdragon 888+'];
    const operatingSystemList = ['Android 14', 'iOS 17', 'MIUI 14', 'OxygenOS 13', 'Android 11', 'ColorOS 12', 'Android 12', 'Realme UI 3.0', 'Funtouch OS 13', 'MIUI 13', 'XOS 12', 'HarmonyOS 2', 'Magic UI 7.0', 'Funtouch OS 12', 'Android 13', 'Realme UI 4.0', 'ColorOS 12.1', 'iOS 16', 'MIUI 12.5', 'Realme UI 2.0', 'iOS 15', 'ColorOS 11', 'HarmonyOS 3', 'Android 10'];

    const storeProducts = useStore<{ products: ProductFieldType[] }>({ products: [] })
    // const filterProducts = useStore<{ products: ProductFieldType[] }>({ products: [] })
    const filterProducts = useStore({ products: storeProducts.products })

    const minMaxPrice = useStore<PriceFilterType>({ minPrice: '', maxPrice: '' });
    const filterItems = useStore({ priceRange: minMaxPrice, ram: [], storage: [], displayType: [], shape: [], region: [], chipset: [], operatingSystem: [] });
    // const filterTitle = {
    //     ram: "RAM",
    //     storage: "Storage",
    //     displayType: "Display Type",
    //     shape: "Shape",
    //     region: "Region",
    //     chipset: "Chipset",
    //     operatingSystem: "Operating System"
    // }


    // console.log("Item is : ", filterItems.ram);
    // filterItems[d].value.push("dgs");
    useContextProvider(priceApi, minMaxPrice);
    useContextProvider(storeApi, storeProducts);
    useContextProvider(filterProductsApi, filterProducts);
    useContextProvider(filterItemsApi, filterItems);

    // useTask$(async () => {
    //      // const res = await fetch("http://127.0.0.1:5500/src/api/products/index.json");
    //     const res = await fetch("http://localhost:5173/api/products/");
    //     const res = await fetch("/api/products");
    //     storeProducts.products = await res.json();
    //     filterProducts.products = storeProducts.products;

    // });

    useVisibleTask$(async () => {
        try {
        //   const res = await fetch(`${window.location.origin}/api/products/`);
          const res = await fetch(`${window.location.origin}/api/products/index.json`);
          storeProducts.products = await res.json();
          filterProducts.products = storeProducts.products;
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    );

    return (
        // 1320px
        <div class="bg-[#EDF2F6] max-w-[1440px] mx-auto pt-[164px]">
            <div class={` ${closeMenu.value ? "hidden" : "block"} `}>
                {/* filter start */}
                {/* <div class="fixed inset-0 bg-black/25" aria-hidden="true"></div> */}

                <div class="fixed inset-0 z-40 flex"
                >

                    <div class="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div
                            class="flex items-center justify-between px-4"
                            onClick$={() => closeMenu.value = true}
                        >
                            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                            <button type="button" class="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                <span class="sr-only">Close menu</span>
                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Filters --> */}
                        <div class="mt-4 border-t border-gray-200">
                            <FilterSidebarMinMax />
                            <FilterSidebarCreate title="Ram" itemList={ramList} signal={ramSignal} filterItems={filterItems.ram} />
                            <FilterSidebarCreate title="Storage" itemList={storageList} signal={storageSignal} filterItems={filterItems.storage} />
                            <FilterSidebarCreate title="Display Type" itemList={displayTypeList} signal={displayTypeSignal} filterItems={filterItems.displayType} />
                            <FilterSidebarCreate title="Shape" itemList={shapeList} signal={shapeSignal} filterItems={filterItems.shape} />
                            <FilterSidebarCreate title="Region" itemList={regionList} signal={regionSignal} filterItems={filterItems.region} />
                            <FilterSidebarCreate title="Chipset" itemList={chipsetList} signal={chipsetSignal} filterItems={filterItems.ram} />
                            <FilterSidebarCreate title="Operating System" itemList={operatingSystemList} signal={operatingSystemSignal} filterItems={filterItems.operatingSystem} />

                        </div>
                    </div>
                </div>
            </div>
            {/* filter end */}

            <main class="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900
                             @md:text-xl
                             ">Phone & Tab</h1>

                    <div class="flex items-center">
                        <div class="relative inline-block text-left">
                            <div
                                onClick$={() => sortBy.value = !sortBy.value}
                            >
                                <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                    Sort
                                    <svg class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            <div class={` ${sortBy.value ? "visible opacity-100 h-max" : "h-0 invisible opacity-0"} absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 focus:outline-hidden `} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div class="py-1" role="none">

                                    <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-0">Most Popular</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-1">Best Rating</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-3"
                                        onClick$={() => filterProducts.products = lowToHigh(filterProducts.products)}
                                    >Low to High</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-4"
                                        onClick$={() => filterProducts.products = HighToLow(filterProducts.products)}
                                    >High to Low</a>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span class="sr-only">View grid</span>
                            <svg class="size-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                                <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button
                            type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick$={() => closeMenu.value = false}
                        >
                            <span class="sr-only">Filters</span>
                            <svg class="size-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                                <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" class="pt-6 pb-10">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* <!-- Filters --> */}

                        <div class=" bg-white hidden p-3 lg:block">
                            <FilterMinMax />
                            <FilterCreate title="Ram" itemList={ramList} signal={ramSignal} filterItems={filterItems.ram} />
                            <FilterCreate title="Storage" itemList={storageList} signal={storageSignal} filterItems={filterItems.storage} />
                            <FilterCreate title="Display Type" itemList={displayTypeList} signal={displayTypeSignal} filterItems={filterItems.displayType} />
                            <FilterCreate title="Shape" itemList={shapeList} signal={shapeSignal} filterItems={filterItems.shape} />
                            <FilterCreate title="Region" itemList={regionList} signal={regionSignal} filterItems={filterItems.region} />
                            <FilterCreate title="Chipset" itemList={chipsetList} signal={chipsetSignal} filterItems={filterItems.ram} />
                            <FilterCreate title="Operating System" itemList={operatingSystemList} signal={operatingSystemSignal} filterItems={filterItems.operatingSystem} />



                            {/* <FilterCreate title="Ram" itemList={ramList} signal={ramSignal} filterItem={filterItems.ram} /> */}
                            {/* <FilterCreate title="Storage" itemList={storageList} signal={storageSignal} />
                                     <FilterCreate title="Display Type" itemList={displayTypeList} signal={displayTypeSignal} />
                                     <FilterCreate title="Shape" itemList={shapeList} signal={shapeSignal} />
                                     <FilterCreate title="Region" itemList={regionList} signal={regionSignal} />
                                     <FilterCreate title="Chipset" itemList={chipsetList} signal={chipsetSignal} />
                                     <FilterCreate title="Operating System" itemList={operatingSystemList} signal={operatingSystemSignal} /> */}

                        </div>
                        <div class="lg:col-span-3">
                            <div class="w-full grid grid-cols-4 gap-3 
                                         md:grid md:grid-cols-4 md:gap-3
                                         sm:grid sm:grid-cols-3
                                         @2xl:grid @2xl:grid-cols-3 @2xl:gap-2
                                         @xl:grid-cols-2 @xl:gap-3
                                         @md:grid-cols-1
                                      
                                     ">

                                <ShowProducts />


                            </div>

                        </div>

                    </div>

                </section>
            </main>
        </div >
    )
});

export default FilterProducts;