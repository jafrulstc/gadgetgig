import { component$, useStore, useStyles$, } from "@builder.io/qwik";
import iPhone16 from "~/asset/images/banner/iphone16.webp";
import googlePhone from "~/asset/images/banner/googlepixel.webp";
import appleWatch from "~/asset/images/banner/applewatch10.webp";
import galaxyS24 from "~/asset/images/banner/galaxcys24.webp";
import { Link } from "@builder.io/qwik-city";
import bannerStyle from '~/asset/css/banner/banner.css?inline';
import { ShowBannerImage, ShowBannerSlide } from "./bannerFnc";

const Banner = component$(() => {
    useStyles$(bannerStyle);
    const bannerImages = [iPhone16, googlePhone, appleWatch, galaxyS24];
    const state = useStore(
        { position: bannerImages.map((_, index) => `${index * 100}%`) }
    );

    return (
        <>
            <div class="banner-container w-full  pt-[164px]  overflow-hidden relative ssm:pt-[60px]">
                <div class="banner-slide w-[100%] max-h-[590px] relative  ">
                    <div class="w-[100%] max-h-full banner-item flex gap-2 items-center ">
                        <div class="w-[100%] max-h-full banner-item  opacity-0 ">
                            <Link href="/product/1">
                                <img width={100} height={100} src={iPhone16} alt="Image" class="w-full max-h-[590px]" />
                            </Link>
                        </div>
                        <ShowBannerImage bannerImages={bannerImages} state={state} />
                    </div>
                    <div class="dots w-fit h-fit py-1 px-2 absolute top-[80%] right-0 bottom-0 left-0 m-auto flex gap-3 justify-center items-center">
                        <ShowBannerSlide state={state} />
                    </div>
                </div>
            </div>
        </>
    )
});

export default Banner;
