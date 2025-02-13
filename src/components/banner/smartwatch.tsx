import { component$ } from "@builder.io/qwik";
import { BigBannerCr } from "./banner_ganerate";

import smartWatchImage from "~/asset/images/banner/smartwatch.webp"
const SmartWatchBanner = component$( ()=> {
    return (
        <div class="max-w-[1440px] mt-7 m-auto">
            <BigBannerCr bigBanner={smartWatchImage} imgHeight="350px" />
        </div>
    )
} )

export default SmartWatchBanner;