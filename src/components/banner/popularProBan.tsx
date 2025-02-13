import { component$ } from "@builder.io/qwik";
import { MultipleBannerCr } from "./banner_ganerate";

import popularImg from "~/asset/images/banner/multi21.webp"
import popularImg2 from "~/asset/images/banner/multi22.webp"

const PopularBanner = component$( ()=> {
    return (
        <div class="max-w-[1440px] mt-7 m-auto">
            <MultipleBannerCr firstImage={popularImg} secondImage={popularImg2} />
        </div>
    )
} );

export default PopularBanner;