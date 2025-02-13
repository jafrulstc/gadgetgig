import { component$ } from "@builder.io/qwik";
import iPhone16 from '~/asset/images/banner/iphone16.webp';
import appleWatch from '~/asset/images/banner/applewatch10.webp';
import { Link } from "@builder.io/qwik-city";

const ComingSoonBan = component$(() => {
    return (
        <div class="max-w-[1440px] mt-7 mb-4 m-auto">
            <div class="w-full max-h-[400px] group overflow-hidden relative flex justify-between 
                lg:w-full lg:max-h-[400px] lg:flex-row
                sm:flex-col sm:max-h-[800px]
                ssm:flex-col ssm:max-h-[800px]
            ">
                <div class="h-full opacity-0
                    ssm:hidden
                ">
                    <img width={100} height={100} src={iPhone16} alt={iPhone16} class="w-full h-full" />
                </div>
                <div class=" h-full opacity-0
                    ssm:hidden
                ">
                   <img width={100} height={100} src={appleWatch} alt={appleWatch} class="w-full h-full" />
                </div>

                <div class="w-[49%] h-full border-bo_gray_300 border-2 border-solid p-2 text-co_black absolute -left-1/2 invisible opacity-0 transition-all ease-linear duration-300  group-hover:left-0 group-hover:visible group-hover:opacity-100 
                    lg:w-[49%] lg:h-full
                    md:w-full md:h-[49%] md:top-0
                    sm:w-full sm:h-[60%] sm:top-0
                    ssm:w-full ssm:h-full ssm:top-0 ssm:static
                    
                ">
                    <div class="w-full h-full ">
                        <div class="w-full 
                        ">
                            <div class="w-4/5 m-auto pt-3 text-center grid grid-cols-4 justify-items-start gap-4
                                ssm:gap-2 
                                xssm:w-full xssm:justify-items-center
                            ">
                                <div class="w-fit">
                                    <div class="w-[100px] h-[100px] bg-bg_white rounded-full relative
                                    ssm:w-[70px] ssm:h-[70px]
                                    
                                    ">
                                        <div class="w-1/2 h-1/2 text-co_red_500 absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 ">
                                            00
                                        </div>
                                    </div>
                                    <h3 class="pt-2 xssm:text-xs ">Days</h3>
                                </div>
                                <div class="w-fit">
                                    <div class="w-[100px] h-[100px] bg-bg_white rounded-full relative
                                    ssm:w-[70px] ssm:h-[70px]
                                    
                                    ">
                                        <div class="w-1/2 h-1/2 text-co_blue_500 absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 ">
                                            00
                                        </div>
                                    </div>
                                    <h3 class="pt-2 xssm:text-xs ">Hours</h3>
                                </div>
                                <div class="w-fit">
                                    <div class="w-[100px] h-[100px] bg-bg_white rounded-full relative
                                    ssm:w-[70px] ssm:h-[70px]
                                    
                                    ">
                                        <div class="w-1/2 h-1/2 text-co_green_500 absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 ">
                                            00
                                        </div>
                                    </div>
                                    <h3 class="pt-2 xssm:text-xs ">Minute</h3>
                                </div>
                                <div class="w-fit">
                                    <div class="w-[100px] h-[100px] bg-bg_white rounded-full relative
                                    ssm:w-[70px] ssm:h-[70px]
                                    
                                    ">
                                        <div class="w-1/2 h-1/2 text-co_pink_500 absolute top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 ">
                                            00
                                        </div>
                                    </div>
                                    <h3 class="pt-2 xssm:text-xs ">Second</h3>
                                </div>

                            </div>

                            <div class="w-full m-auto mt-5 text-center
                                ssm:mt-2
                            ">
                                <h1 class="text-3xl p-3
                                    xssm:text-sm
                                ">WOO! Flash Sale</h1>
                                <p class="p-1 mt-3
                                    ssm:pb-2 ssm:mt-1
                                    xssm:text-xs
                                ">You get into the 2k+ best Products in Flash offer with a special-shaped sofa for sale.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[49%] h-full overflow-hidden absolute right-1/2 invisible opacity-0 transition-all ease-linear duration-500 group-hover:right-0 group-hover:visible group-hover:opacity-100
                    lg:w-[49%] lg:h-full
                    md:w-full md:h-[49%] md:bottom-0                
                    sm:w-full sm:h-[38%] sm:bottom-0                
                    ssm:w-full ssm:h-full ssm:bottom-0 ssm:static          
                ">
                    <Link href="#"> <img width={100} height={100} src={appleWatch} alt={appleWatch} class="w-full h-full transition-all ease-linear delay-100 duration-300 hover:scale-110 " /></Link>
                </div>
            </div>
        </div>
    )
});

export default ComingSoonBan;