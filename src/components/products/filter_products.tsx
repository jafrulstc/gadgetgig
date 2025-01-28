import { component$, useSignal} from "@builder.io/qwik";
import { FilterCreate, FilterMinMax, FilterSidebarCreate, FilterSidebarMinMax } from "./filter_components";

// import image start
import productImage from "~/asset/images/products/Galaxy_S22_Ultra_Red.webp";
import ProductCard from "~/components/products/product_card";
// import image end

const FilterProducts = component$(() => {
    const featuredSelections = useSignal(true);
    const collectionHide = useSignal(false);
    const storageHide = useSignal(false);
    const brandHide = useSignal(false);
    const sortBy = useSignal(false);
    const closeMenu = useSignal(true);

    const collectItems = ["Today", "This Week", "This Month"];
    const brandItems = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo", "Vivo", "Asus", "Nokia", "Motorola", "Google", "Sony", "LG", "HTC", "Lenovo", "Huawei", "Micromax", "Blackberry", "Panasonic", "Lava", "Karbonn", "Gionee", "Infinix", "Intex", "iBall", "Jio", "LeEco", "Meizu", "Micromax", "Mobiistar", "Nubia", "Poco", "Qiku", "Spice", "Tecno", "TCL", "Ulefone", "Wiko", "YU", "ZTE"];
    const storageItems = ["4/64", "8/64", "8/128", "12/256", "16/256"];
    const featuredSelectionsItems = ["Popular", "Top Selling", "Top Pricing", "Discount"];


    return (
        <div class="bg-[#EDF2F6] max-w-[1320px] mx-auto">
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
                        <form class="mt-4 border-t border-gray-200">
                            <FilterSidebarMinMax />
                            <FilterSidebarCreate title="Featured Selections" itemList={featuredSelectionsItems} signal={featuredSelections} />
                            <FilterSidebarCreate title="Collections" itemList={collectItems} signal={collectionHide} />
                            <FilterSidebarCreate title="Brand" itemList={brandItems} signal={brandHide} />
                            <FilterSidebarCreate title="Storage" itemList={storageItems} signal={storageHide} />

                        </form>
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
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-3">Low to High</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex={-1} id="menu-item-4">High to Low</a>
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

                        <form class=" bg-white hidden p-3 lg:block">
                            <FilterMinMax />
                            <FilterCreate title="Featured Selections" itemList={featuredSelectionsItems} signal={featuredSelections} />
                            <FilterCreate title="Collections" itemList={collectItems} signal={collectionHide} />
                            <FilterCreate title="Brand" itemList={brandItems} signal={brandHide} />
                            <FilterCreate title="Storage" itemList={storageItems} signal={storageHide} />

                        </form>
                        <div class="lg:col-span-3">
                            <div class="w-full grid grid-cols-4 gap-3 
                                md:grid md:grid-cols-4 md:gap-3
                                sm:grid sm:grid-cols-3
                                @2xl:grid @2xl:grid-cols-3 @2xl:gap-2
                                @xl:grid-cols-2 @xl:gap-3
                                @md:grid-cols-1
                                
                            ">

                                {
                                    brandItems.map((item, index) => (
                                        <div key={index} class="product lg:max-h-96 xl:w-full overflow-hidden p-3 bg-white 
                                            @2xl:h-[270px]

                                        ">
                                            <ProductCard productImage={productImage} productName={item} productPrice={1000} />

                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                </section>
            </main>
        </div >
    )
});

export default FilterProducts;