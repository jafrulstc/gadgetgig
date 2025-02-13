import { component$, useStyles$ } from "@builder.io/qwik";
import type ProductsType from "~/interface/products/products";
//import image start

import { Link } from "@builder.io/qwik-city";
//import image end
import productStyle from "~/asset/css/products/products.css?inline"
import { productList } from "./productList";


//beautifu card and button

// <div class="product lg:max-h-96 xl:w-60 overflow-hidden p-3 bg-bg_white ">

// <div class="w-full h-full font-sans font-semibold pb-4 text-[13px] transition-all ease-linear duration-300 transform hover:scale-105">
//     <div class="image max-w-[90%] h-[70%]">
//         <img width="100" height="100" src={product.image} alt="iphone12" class="w-full h-full" />
//     </div>
//     <div class="w-full px-2 pt-2 flex justify-between">
//         <div class="title">
//             <h3 class="h-12 hover:text-hoc_red_400">{product.name}</h3>
//             {/* <h3>{product.category}</h3> */}

//         </div>
//         <div class="price px-2 text-co_red_400">
//             ${product.price}
//         </div>
//     </div>
//     <div class="w-full flex justify-between uppercase">
//         <button class="w-20 bg-bg_red_500 cursor-pointer text-co_white rounded px-3 py-2 text-[10px] active:bg-act_gray_400 active:text-act_white ">Add to Cart</button>
//         <button class="w-20 cursor-pointer  text-co_gray_400 rounded border border-solid border-bo_red_500 px-3 py-2 text-[10px] transition-all duration-200 ease-linear hover:bg-hov_red_500 hover:text-hoc_white">Buy Now</button>
//     </div>
// </div>

// </div>



const CreateProducts = ({ products }: { products: Array<ProductsType> }) => {
    const items = products.map((product, index) => (
        <Link href="/products/details" key={index}>
            {/* bg-[#F5EFFF] */}
            <div class="product lg:max-h-96 xl:w-60 overflow-hidden p-3 bg-bg_white ">

                <div class="w-full h-full font-sans font-semibold pb-4 text-[13px] transition-all ease-linear duration-300 transform hover:scale-105">
                    <div class="image max-w-[90%] h-[70%]">
                        <img width="100" height="100" src={product.image} alt="iphone12" class="w-full h-full" />
                    </div>
                    <div class="w-full px-2 pt-2 flex justify-between">
                        <div class="title">
                            <h3 class="h-12 hover:text-hoc_red_400">{product.name}</h3>
                            {/* <h3>{product.category}</h3> */}

                        </div>
                        <div class="price px-2 text-co_red_400">
                            ${product.price}
                        </div>
                    </div>
                    <div class="w-full flex justify-between uppercase">
                        <button class="w-20 bg-bg_red_500 cursor-pointer text-co_white rounded px-3 py-2 text-[10px] active:bg-act_gray_400 active:text-act_white ">Add to Cart</button>
                        <button class="w-20 cursor-pointer  text-co_gray_400 rounded border border-solid border-bo_red_500 px-3 py-2 text-[10px] transition-all duration-200 ease-linear hover:bg-hov_red_500 hover:text-hoc_white">Buy Now</button>
                    </div>
                </div>

            </div>
        </Link>
    ));

    return items
}

const Products = component$(() => {
    useStyles$(productStyle);
    return (
        <>
            {/* <div class="products max-w-[1440px] flex flex-wrap m-auto">
                <CreateProducts products={productList} />
            </div> */}
            <div class="products max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 m-auto ssm:pt-4">
                <CreateProducts products={productList} />
            </div>

            {/* <div class="max-w-72 bg-bg_white">

                <div class="flex justify-end p-1">
                    <IconClose svgStyle="w-4 h-4" viewBoxStyle="0 0 15 15" />
                </div>

                <div class="px-2 pt-1 flex justify-between">
                    <button
                        class={["w-32 h-8  border border-solid border-bo_black", isClicked.value ? "bg-bg_red_400 text-co_white" : "bg-bg_white text-co_black"]}
                        onClick$={() => (isClicked.value = true)}
                    >
                        Category
                    </button>
                    <button
                        class={["w-32 h-8  border border-solid border-bo_black", isClicked.value ? "bg-bg_white text-co_black" : "bg-bg_red_400 text-co_white"]}
                        onClick$={() => (isClicked.value = false)}
                    >
                        Menu
                    </button>
                </div>

                <ul class="list-none p-2 border-solid border-bo_white rounded-lg shadow-sm">

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Phone & Tablets</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Macbook</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Sound Equipment</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Power & Accessories</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Fitness & Wearables</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Peripherals</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Cover & Glasses</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Smart Electronics</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Blogs</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Used Products</li>

                    <li class="bg-[#f9f9f9] border-b border-solid border-[#ccc] m-0 pt-2 px-3 transition-colors duration-300 hover:bg-[#e6e6e6] ">Offers</li>

                </ul>


                <ul class=" bg-red-200 capitalize relative flex flex-col justify-center gap-5 px-3 text-sm font-semibold">
                    <li class="show-categories  cursor-pointer">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Phone & Tablets</span>
                        <ul class="w-48 bg-white capitalize text-xs flex flex-col gap-1   ">
                            <li class="sub-categories group bg-green-500">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Macbook</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Sound Equipment</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Power & Accessories</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Fitness & Wearables</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Peripherals</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Cover & Glasses</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="show-categories   cursor-pointer relative">
                        <span class=" md:text-[11px] md:font-bold lg:text-sm leading-5 flex flex-col justify-center">Smart Electronics</span>
                        <ul class="w-48 bg-white capitalize text-[16px] font-semibold rounded-lg absolute left-1 top-[90%] flex flex-col gap-1   ">
                            <li class="sub-categories group">
                                <div class="flex justify-between items-center">
                                    <span>ipad & Tab</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>iPhone</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Samsung</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Google</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>


                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Xioami</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Motorola</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Amazon</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>OnePlus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nokia</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Realme</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Nothing</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Huawei</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Infinix</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Oppo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Vivo</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>

                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>Asus</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                            <li class="sub-categories group relative">
                                <div class="flex justify-between items-center">
                                    <span>ZTE</span>
                                    <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>

                                </div>
                                <ul class="w-full bg-white text-black rounded-lg absolute left-full top-0 ">
                                    <li>iPad</li>
                                    <li>Galaxcy Tab</li>
                                    <li>Honor Tab</li>
                                    <li>Xioami Tab</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span class="cursor-pointer md:text-xs lg:text-sm ">Blogs</span>
                    </li>

                    <li>
                        <span class="cursor-pointer md:text-xs lg:text-sm ">Used Products</span>
                    </li>

                    <li>
                        <span class="cursor-pointer md:text-xs lg:text-sm ">Offers</span>
                    </li>
                </ul>

            </div> */}

            {/* <ProductDetails /> */}

        </>
    )
});

export default Products;


