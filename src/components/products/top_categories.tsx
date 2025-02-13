import { $, component$ } from "@builder.io/qwik";
import iphone12 from '~/asset/images/products/iphone12.webp';
import SmallBanner from "../banner/smallBanner";
import { Link } from "@builder.io/qwik-city";

const topCategoryList: string[] = ["ipad", "iPhone", "Samsung", "Xioami", "Oppo", "Vivo", "Asus", "One plus", "realme", "Nokie", "lava", "Lenovo"];

const TopCategories = component$(() => {
    const topCategories = $(() => {
        return (
            topCategoryList.map((item, index) => (
                <div key={index} class="w-full h-full bg-bg_white cursor-pointer rounded-md overflow-hidden">
                    <Link href="/products/">
                        <div class="w-full h-full p-3 pb-4 transform transition-all ease-linear hover:text-co_gray_400 hover:scale-105 
                        ssm:p-1 ssm:pb-2
                    ">
                            <img width={100} height={100} src={iphone12} alt="iphone12" class="max-w-[60px] max-h-[60px] m-auto" />
                            <div class="w-full text-center pt-3 ">
                                <h4 class="text center pt-3 ssm:pt-1 ">{item}</h4>
                            </div>
                        </div>
                    </Link>

                </div>

            ))
        )
    });

    return (
        <>
            <section class="max-w-[1440px] pt-3 pb-5 mt-5 m-auto">
                <div class="w-full text-2xl m-auto">
                    <h2 class="text-center capitalize">Top Categories</h2>
                </div>
                <div class="max-w-full m-auto px-1 pt-4 grid grid-cols-6 gap-2 place-items-center
                md:max-w-full md:text-[16px] md:grid-cols-6
                sm:max-w-full sm:grid-cols-6
                ssm:grid-cols-5 ssm:text-[13px]
                xssm:grid-cols-5
                2xssm:text-[10px] 2xssm:font-bold 2xssm:grid-cols-4
            ">

                    {topCategories()}
                </div>
            </section>
            <SmallBanner />
        </>
    )
});
export default TopCategories;