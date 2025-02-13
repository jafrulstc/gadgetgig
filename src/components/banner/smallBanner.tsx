import { component$ } from "@builder.io/qwik";
import iPhone16 from '~/asset/images/banner/iphone16.webp';
import appleWatch from '~/asset/images/banner/applewatch10.webp';
import { Link } from "@builder.io/qwik-city";

const SmallBanner = component$(() => {
    return (
        <div class="max-w-[1440px] mt-7 m-auto">
            <div class="w-full group overflow-hidden relative flex justify-between ">
                <div class="w-[49%] max-h-[300px] opacity-0">
                    <img width={100} height={100} src={iPhone16} alt={iPhone16} class="w-full h-full" />
                </div>
                <div class="w-[49%] max-h-[300px] opacity-0">
                    <img width={100} height={100} src={appleWatch} alt={appleWatch} class="w-full h-full" />
                </div>

                <div class="w-[49%] max-h-[300px] invisible opacity-0 overflow-hidden absolute -left-1/2 transition-all ease-linear duration-500  group-hover:left-0 group-hover:visible group-hover:opacity-100 ">
                    <Link href="#">                    <img width={100} height={100} src={iPhone16} alt={iPhone16} class="w-full h-full transition-all ease-linear delay-100 duration-300 hover:scale-110 " /></Link>
                </div>
                <div class="w-[49%] max-h-[300px] invisible opacity-0 overflow-hidden absolute -right-1/2 transition-all ease-linear duration-500 group-hover:right-0 group-hover:visible group-hover:opacity-100">
                    <Link href="#">                    <img width={100} height={100} src={appleWatch} alt={appleWatch} class="w-full h-full transition-all ease-linear delay-100 duration-300 hover:scale-110 " /></Link>
                </div>
            </div>
        </div>
    )
});

export default SmallBanner;