import { component$ } from "@builder.io/qwik";
import galaxyS24 from '~/asset/images/banner/galaxcys24.webp';
import { BigBannerCr } from "./banner_ganerate";

const AccessoriesBanner = component$( ()=> {
    return (
        <div class="w-full mt-5 py-4">
            <BigBannerCr bigBanner={galaxyS24} imgHeight="500px" />
        </div>
    )
} );

export default AccessoriesBanner