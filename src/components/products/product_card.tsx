import { component$ } from "@builder.io/qwik";

const ProductCard = component$<{ productImage:string, productName:string, productPrice:number}>(({productImage, productName, productPrice}) => {
    return (
        <div class="w-full h-full font-sans font-semibold pb-4 text-[13px] transition-all ease-linear duration-300 transform hover:scale-105">
            <div class="image max-w-[90%] h-[70%] m-auto ">
                <img width="100" height="100" src={productImage} alt="iphone12" class="w-[83%] h-[89%] m-auto
            @xl:w-[150px] @xl:h-[150px]
        " />
            </div>
            <div class="w-full px-2 pt-2 flex justify-between">
                <div class="title">
                    <h3 class="h-12 hover:text-red-400">{productName}</h3>
                </div>
                <div class="price px-2 text-red-400">
                    ${productPrice}
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
} );

export default ProductCard;