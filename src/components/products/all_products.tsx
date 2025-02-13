import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import ProductCr from "./product_create";
import { Link } from "@builder.io/qwik-city";
import { productList } from "./product_list";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import swiperBundle from "swiper/swiper-bundle.css?inline"
import newProStyle from "~/asset/css/products/new_pro.css?inline"
import ButtonSlider from "./button_slider";




const AllProducts = component$(() => {
    useStyles$(swiperBundle);
    useStyles$(newProStyle)
    useVisibleTask$(() => {
        new Swiper('.mySwiper', {
            modules: [Navigation],
            spaceBetween: 30,
            slidesPerView: 5, // Number of slides per row

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
            <div class="capitalize w-full font-semibold text-base flex justify-between px-2 py-2 pb-4">
                <h3>All Productsl</h3>
                <h3 class="underline transition-colors ease-linear hover:text-co_red_400"> <Link href="#">View More</Link> </h3>
            </div>
            <div class="swiper mySwiper w-full  text-center relative">
                <div class="swiper-wrapper">
                    <ProductCr products={productList.newProducts} />
                </div>

                <div class="button-prev" typeof="button">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </div>
                <div class="button-next" typeof="button">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </div>


            </div>
            <div class="swiper mySwiper w-full mt-5 text-center relative">
                <div class="swiper-wrapper">
                    <ProductCr products={productList.newProducts} />
                </div>
                <ButtonSlider />
            </div>
        </div>
    )
});

export default AllProducts