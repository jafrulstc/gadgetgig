// qwik component start
import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
// qwik component end
import { Link } from "@builder.io/qwik-city";

// import component start
import ProductCr from "./product_create";
import ButtonSlider from "./button_slider";
// import component end

// import data start
import { productList } from "./product_list";
// import data end

// swiper start
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import swiperBundle from "swiper/swiper-bundle.css?inline";
import swiperCss from "swiper/css?inline";
//swiper end

//custom css start
import newProStyle from "~/asset/css/products/new_pro.css?inline"
//custom css end



const NewProducts = component$(() => {
    useStyles$(swiperBundle);
    useStyles$(swiperCss);
    useStyles$(newProStyle);

    useVisibleTask$(() => {
        new Swiper('.mySwiper', {
            modules: [Navigation, Pagination],
            spaceBetween: 30,
            slidesPerView: 5,

            navigation: {
                prevEl: ".button-prev",
                nextEl: ".button-next",
            },
            breakpoints: {
                1024: { slidesPerView: 5 },
                768: { slidesPerView: 3 },
                640: { slidesPerView: 3 },
                300: { slidesPerView: 2 },
                100: {slidesPerView: 1},

            },


        });
    });


    return (
        <div class="max-w-[1440px] m-auto mt-10">
            <div class="capitalize w-full font-semibold flex justify-between px-2 py-2 pb-4">
                <h3>New Arrival</h3>
                <h3 class="underline transition-colors ease-linear hover:text-co_red_400"> <Link href="#">View More</Link> </h3>
            </div>
            <div class="swiper mySwiper w-full  text-center relative">
                <div class="swiper-wrapper">
                    <ProductCr products={productList.newProducts} />
                </div>
                <ButtonSlider />
            </div>
        </div>
    )

})

export default NewProducts;