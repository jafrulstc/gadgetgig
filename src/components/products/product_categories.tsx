import { component$, useStyles$ } from "@builder.io/qwik";
import productCategoriesStyle from '~/asset/css/header/product_categories.css?inline'
import { categoryList } from "./category";

const ProductCategories = component$( ()=> {
    useStyles$(productCategoriesStyle);

    const categories = ()=> {

        // const catLen = categoryList.length;
        let pos = "";
        let left = "3";
        let posChange = "";
        let leftChange = "";
        return (
            categoryList.map( (category, index)=> {
                posChange = pos
                leftChange = left;
                pos = "relative";
                left = "1";

                return (
                    <li key={index} class={`show-categories h-full cursor-pointer ${posChange}
                        ssm:w-full
                    `}>
                        <span  class="h-full leading-5 flex flex-col justify-center
                            lg:text-sm
                            md:text-[11px] md:font-bold 
                            ssm:h-fit ssm:text-[14px] ssm:px-3
                            ssm:text-lg ssm:font-semibold ssm:text-gray-800 ssm:mb-2 ssm:border-b ssm:border-bo_gray_300 ssm:pb-2
                            
                        ">
                            {category.name}
                        </span>
                        { category.subCategories.length > 0 &&
                            <ul class={`w-48 bg-bg_white capitalize text-[16px] font-semibold rounded-lg absolute  left-${leftChange} top-[90%] flex flex-col gap-1
                                ssm:w-full ssm:rounded-none ssm:static 
                                
                            `}>
                                {category.subCategories.map((subCategory, subCategoryIndex) => (
                                    <li key={subCategoryIndex} class={`sub-categories group
                                        ssm:border-b ssm:border-bo_gray_300 
                                    `}>
                                        <div class="testdiv flex justify-between items-center ssm:px-4 ssm:hover:pb-2">
                                            <span>{subCategory.name}</span>
                                            <div class="group-hover:rotate-90 transition-all duration-200 ease-linear">▶︎</div>
                                            
                                        </div>
                                        
                                        {subCategory.subSubCategories.length > 0 && 
                                            <ul class="hovertarget w-full bg-bg_white text-black rounded-lg absolute left-full top-0 
                                                ssm:rounded-none ssm:static
                                            ">
                                                { subCategory.subSubCategories.map( (subSubCategory, subSubCategoryIndex) => (
                                                    <li key={subSubCategoryIndex} class="h-full pb-2">
                                                        <span class="ssm:pl-4">{subSubCategory}</span>
                                                    </li>
                                                ) ) }
                                            </ul>
                                        }
                                    </li>
                                ) ) }
                            </ul>
                        } 
                    </li>
                )
                
            } )
            
        );
    }
    return (
        <>
            <ul class="h-full capitalize relative flex justify-between items-center gap-5 px-3 text-sm font-semibold">
                {categories()}
            </ul>
        </>

    )
});

export default ProductCategories;