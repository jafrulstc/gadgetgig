import { component$, useContext, useSignal, useStore } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

import { filterItemsApi, filterProductsApi, priceApi, storeApi } from "./filter_products";
import { allProductsFilter } from "./filter_fnc";
// import type { FilterOptionType, ProductType } from "~/components/products/filter_products";

// import { storeApi, filterOptionApi, filterProductsApi } from "~/components/products/filter_products";
// import { priceFilter } from "~/components/products/filter_fnc";

interface FilterCreateProps {
    title: string,
    itemList: string[],
    signal: Signal<boolean>,
    // filterItem: Signal<string[]>,
    filterItems: string[]
}
interface FilterSideBarCreateProps {
    title: string,
    itemList: string[],
    signal: Signal<boolean>,
    filterItems: string[],
}
// interface MinMaxType {
//     min: number,
//     max: number

// }

const FilterMinMax = component$(() => {
    // Local state for temporary input values
    const tempValues = useStore({ min: '', max: '' });
    const price = useContext(priceApi);
    const filterProducts = useContext(filterProductsApi);
    const storeProducts = useContext(storeApi);
    const filterItems = useContext(filterItemsApi);

    return (
        <>
            <div class="flex gap-4 mb-2">
                {/* Min Box */}
                <div>
                    <label for="min" class="block text-sm font-medium text-gray-600">Min Price</label>
                    <input
                        id="min"
                        type="number"
                        min={0}
                        value={tempValues.min}
                        class="w-full mt-1 px-1 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="0"
                        onInput$={(event) => (tempValues.min = (event.target as HTMLInputElement).value)}
                    />
                </div>

                {/* Max Box */}
                <div>
                    <label for="max" class="block text-sm font-medium text-gray-600">Max Price</label>
                    <input
                        id="max"
                        type="number"
                        value={tempValues.max}
                        class="w-full mt-1 px-1 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="1000"
                        onInput$={(event) => (tempValues.max = (event.target as HTMLInputElement).value)}
                    />
                </div>
            </div>

            <div class="text-end">
                <button

                    class="w-full py-1 px-6 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-auto"
                    onClick$={() => {
                        price.minPrice = tempValues.min;
                        price.maxPrice = tempValues.max;
                        filterProducts.products = allProductsFilter(storeProducts.products, filterItems);
                    }}
                >
                    Filter
                </button>
            </div>
        </>
    );
});



const FilterSidebarMinMax = component$(() => {
    const tempValues = useStore({ min: '', max: '' });
    const price = useContext(priceApi);
    const filterProducts = useContext(filterProductsApi);
    const storeProducts = useContext(storeApi);
    const filterItems = useContext(filterItemsApi);
    return (
        <>
            <div class="flex gap-4 mb-2 py-2 px-3">
                {/* <!-- Min Box --> */}
                <div class="">
                    <label for="min" class="block text-sm font-medium text-gray-600">Min Price</label>
                    <input id="min" type="number" class="w-full mt-1 px-1 py-1 border border-gray-300 rounded-lg focus:ring- focus:outline-none" placeholder="0"
                        min={0}
                        value={tempValues.min}
                        onInput$={(event) => (tempValues.min = (event.target as HTMLInputElement).value)}
                    />
                </div>

                {/* <!-- Max Box --> */}
                <div class="">
                    <label for="max" class="block text-sm font-medium text-gray-600">Max Price</label>
                    <input id="max" type="number" class="w-full mt-1 px-1 py-1 border border-gray-300 rounded-lg focus:ring- focus:outline-none" placeholder="1000"
                        min={0}
                        value={tempValues.max}
                        onInput$={(event) => (tempValues.max = (event.target as HTMLInputElement).value)}
                    />
                </div>
            </div>
            <div class="text-end px-3 pb-3">
                <button class="w-full py-1 px-6 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-auto"
                    onClick$={() => {
                        price.minPrice = tempValues.min;
                        price.maxPrice = tempValues.max;
                        filterProducts.products = allProductsFilter(storeProducts.products, filterItems);
                    }}
                >
                    Filter
                </button>
            </div>
        </>

    )
})

const FilterCreate = component$<FilterCreateProps>(({ title, itemList, signal, filterItems }) => {
    const isChecked = useSignal<boolean[]>(itemList.map(() => false));
    const filterProducts = useContext(filterProductsApi);
    const storeProducts = useContext(storeApi);
    const filterItemOptions = useContext(filterItemsApi);

    return (
        <div class="border-b border-gray-200 py-6">
            <h3 class="-my-3 flow-root">
                {/* <!-- Expand/collapse section button --> */}
                <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span class="font-medium text-gray-900">{title}</span>
                    <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                            class={` size-5 ${signal.value ? "hidden" : "block"} `} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"
                            onClick$={() => signal.value = true}
                        >
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                            class={` size-5 ${signal.value ? "block" : "hidden"} `} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"
                            onClick$={() => signal.value = false}
                        >
                            <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </h3>



            {/* <!-- Filter section, show/hide based on section state. --> */}
            <div class={` pt-6 ${signal.value ? " visible opacity-100 block" : "invisible opacity-0 hidden"} `} id="filter-section-0">
                <div class="flex px-1 py-3 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                    <input type="text" placeholder="Search..." class="w-full outline-none bg-transparent text-gray-600 text-sm" />
                </div>
                <div class="space-y-4">
                    {
                        itemList.map((item, index) => (

                            <div key={index} class="flex gap-3">
                                <div class="flex h-5 shrink-0 items-center">
                                    <div class="group grid size-4 grid-cols-1">
                                        <input
                                            onClick$={() => {


                                                isChecked.value[index] = !isChecked.value[index]
                                                if (isChecked.value[index]) {
                                                    filterItems.push(item);

                                                }
                                                else {
                                                    const indexRemove = filterItems.indexOf(item);
                                                    filterItems.splice(indexRemove, 1)

                                                }
                                                console.log("before products : ", filterProducts.products);
                                                filterProducts.products = [...allProductsFilter(storeProducts.products, filterItemOptions)];
                                                console.log("after products : ", filterProducts.products);


                                            }}
                                            id="filter-category-2" name="category[]" checked={isChecked.value[index]} type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                        <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                            <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <label for="filter-category-2" class="text-sm text-gray-600">{item}</label>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
});


const FilterSidebarCreate = component$<FilterSideBarCreateProps>(({ title, itemList, signal, filterItems }) => {
    const isChecked = useSignal<boolean[]>(itemList.map(() => false));
    const filterProducts = useContext(filterProductsApi);
    const storeProducts = useContext(storeApi);
    const filterItemOptions = useContext(filterItemsApi);

    return (
        <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
                {/* <!-- Expand/collapse section button --> */}
                <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                    <span class="font-medium text-gray-900">{title}</span>
                    <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg
                            class={` size-5 ${signal.value ? "hidden" : "block"} `} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"
                            onClick$={() => signal.value = true}
                        >
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg
                            class={` size-5 ${signal.value ? "block" : "hidden"} `} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"
                            onClick$={() => signal.value = false}
                        >
                            <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </h3>
            {/* <!-- Filter section, show/hide based on section state. --> */}
            <div class={` pt-6 ${signal.value ? " h-max visible opacity-100 block" : " h-0 invisible opacity-0 hidden"} `} id="filter-section-mobile-0">
                <div class="space-y-6">
                    {
                        itemList.map((item, index) => (
                            <div key={index} class="flex gap-3">
                                <div class="flex h-5 shrink-0 items-center">
                                    <div class="group grid size-4 grid-cols-1">
                                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            onClick$={() => {


                                                isChecked.value[index] = !isChecked.value[index]
                                                if (isChecked.value[index]) {
                                                    filterItems.push(item);

                                                }
                                                else {
                                                    const indexRemove = filterItems.indexOf(item);
                                                    filterItems.splice(indexRemove, 1)

                                                }
                                                console.log("before products : ", filterProducts.products);
                                                filterProducts.products = [...allProductsFilter(storeProducts.products, filterItemOptions)];
                                                console.log("after products : ", filterProducts.products);


                                            }}

                                        />
                                        <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                            <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <label for="filter-mobile-color-0" class="min-w-0 flex-1 text-gray-500">{item}</label>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
});

export { FilterMinMax, FilterSidebarMinMax, FilterCreate, FilterSidebarCreate };

