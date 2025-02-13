import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// interface BannerType {
//     bigBanner: string,
//     multiBanner: string[],
//     imgHeight: string,
//     imgScale?: string,
//     imgSlide?: string,
// }

// interface BannerAnimateType {
//     animate:false,
//     animateStart: "left",
//     opacityStart: '0',
//     opacityEnd: '1',
//     transition: "ease-linier",
//     duration: "500ms",

// }

const BigBannerCr = component$<{ bigBanner: string, imgHeight: string }>(({ bigBanner, imgHeight }) => {
    return (

        <div class="w-full banner-item flex gap-2 items-center relative ">
            <div class="w-full banner-item  opacity-0 ">
                <Link href="/product/1">
                    <img width={100} height={100} src={bigBanner} alt="Image" class="w-full"
                        style={{ maxHeight: imgHeight }}
                    />
                </Link>
            </div>
            <div class={`w-full max-h-full banner-item px-1 transition-all ease-linear delay-300 duration-500 absolute`}

            >

                <Link href="#">
                    <img width={100} height={100} src={bigBanner} alt="Image" class="w-full"
                        style={{ maxHeight: imgHeight }}
                    />
                </Link>
            </div>
        </div>


    )
});

const MultipleBannerCr = component$<{firstImage: string, secondImage: string}>(({firstImage, secondImage}) => {
    return (
        <div class="w-full group overflow-hidden relative flex justify-between ">
            <div class="w-[49%] max-h-[300px] opacity-0">
                <img width={100} height={100} src={firstImage} alt={firstImage} class="w-full h-full" />
            </div>
            <div class="w-[49%] max-h-[300px] opacity-0">
                <img width={100} height={100} src={secondImage} alt={secondImage} class="w-full h-full" />
            </div>

            <div class="w-[49%] max-h-[300px] invisible opacity-0 overflow-hidden absolute -left-1/2 transition-all ease-linear duration-500  group-hover:left-0 group-hover:visible group-hover:opacity-100 ">
                <Link href="#">                    <img width={100} height={100} src={firstImage} alt={firstImage} class="w-full h-full transition-all ease-linear delay-100 duration-300 hover:scale-110 " /></Link>
            </div>
            <div class="w-[49%] max-h-[300px] invisible opacity-0 overflow-hidden absolute -right-1/2 transition-all ease-linear duration-500 group-hover:right-0 group-hover:visible group-hover:opacity-100">
                <Link href="#">                    <img width={100} height={100} src={secondImage} alt={secondImage} class="w-full h-full transition-all ease-linear delay-100 duration-300 hover:scale-110 " /></Link>
            </div>
        </div>
    )
});


export { BigBannerCr, MultipleBannerCr }