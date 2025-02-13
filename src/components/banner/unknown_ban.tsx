import { component$ } from "@builder.io/qwik";
import mackBook from '~/asset/images/banner/macbook.webp';
import { BigBannerCr } from "./banner_ganerate";

const UnknownBan = component$( ()=> {
    return (
        <div class="max-w-[1440px] mt-5 m-auto py-4">
            <BigBannerCr bigBanner={mackBook} imgHeight="500px" />
        </div>
    )
} );

export default UnknownBan