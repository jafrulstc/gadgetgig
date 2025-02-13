import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ProductCr from "./product_create";
import { productList } from "./product_list";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import swiperBundle from "swiper/swiper-bundle.css?inline";
import swiperCss from "swiper/css?inline";
import newProStyle from "~/asset/css/products/new_pro.css?inline"
import ButtonSlider from "./button_slider";

const PopularProducts = component$(() => {
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
                320: { slidesPerView: 2 },
                100: { slidesPerView: 1 },

            },


        });
    });


    return (
        <div class="max-w-[1440px] m-auto mt-10">
            <div class="capitalize w-full font-semibold text-base flex justify-between p-2 pb-4">
                <h3>Popular Products</h3>
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

export default PopularProducts;