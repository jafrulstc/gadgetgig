import { component$ } from "@builder.io/qwik";

interface ProductType {
    products: Array<{
      proImage: string;
      proName: string;
    }>;

  }

  const ProductCr = component$((productList:ProductType) => {
    return (
        productList.products.map((item, index: number) => (
            <div key={index} class="swiper-slide bg-bg_white rounded-lg overflow-hidden p-3 px-4 ">

                <div class="w-full font-sans font-semibold pb-4 text-[13px] transition-all ease-linear duration-300 transform 
                    hover:scale-105
                    xssm:max-w-[300px] xssm:m-auto
                    ">
                    <div class="w-full max-h-[210px] ssm:max-w-[200px] m-auto ">
                        <img width="100" height="100" src={item.proImage} alt="iphone12" class="w-full max-h-[210px]
                        xssm:w-[120px] xssm:m-auto
                        " />
                    </div>
                    <div class="w-full px-2 pt-4 flex justify-between">
                        <div class="title">
                            <h3 class="h-12 hover:text-hoc_red_400">{item.proName}</h3>

                        </div>
                        <div class="price px-2 text-co_red_400">
                            $1000
                        </div>
                    </div>
                    <div class="w-full uppercase grid grid-cols-2 gap-3
                    lg:grid lg:grid-cols-2 lg:gap-3
                    md:flex justify-start
                    xssm:flex xssm:justify-start
                    2xssm:flex 2xssm:flex-col 2xssm:items-center
                    3xssm:flex 3xssm:flex-row 3xssm:justify-between
                    ">
                        <button class="max-w-[100px] bg-bg_red_500 cursor-pointer text-co_white rounded px-1 py-2  active:bg-act_gray_400 active:text-act_white 
                            2lg:text-xs
                            lg:w-max lg:text-[11px] lg:px-2
                            md:w-[100px] md:text-[13px]
                            sm:text-[12px]
                            xssm:px-3
                            2xssm:w-[70px] 2xssm:px-1 2xssm:text-[11px]
                            3xssm:w-[100px] 3xssm:px-3 3xssm:text-[13px]
                            ">Add to Cart</button>
                        <button class="max-w-[80px] cursor-pointer  text-co_gray_400 rounded border border-solid border-bo_red_500 px-1 py-2   transition-all duration-200 ease-linear hover:bg-hov_red_500 hover:text-hoc_white
                            2lg:text-xs
                            lg:w-max lg:text-[11px] lg:px-2
                            md:max-w-[90px] md:px-3 md:text-[13px]
                            sm:px-1 sm:text-[12px]
                            xssm:px-2
                            2xssm:w-[70px] 2xssm:px-1 2xssm:text-[11px]
                            3xssm:min-w-[100px] 3xssm:px-3 3xssm:text-[13px]
                            ">Buy Now</button>
                    </div>
                </div>
            </div>
        ))

    )
});

export default ProductCr

