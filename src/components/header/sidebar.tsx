import { component$, useContext, useSignal } from "@builder.io/qwik";
import phoneImage from "~/asset/images/products/iphone12.webp"
import { categoryList, policiesAndInfo } from "~/components/products/category";
import { sideBarClose } from "~/components/header/header";
import { IconClose } from "~/components/svgIcons/icons";

 
const Sidebar = component$(() => {
  const selectedCategory = useSignal<number | null>(null);
  const selectedSubCategory = useSignal<number | null>(null);


  const isClicked = useSignal(true);
  const sdClose = useContext(sideBarClose);

  return (
    <aside class={` w-[00px] h-screen opacity-0 invisible  bg-bg_white shadow-lg overflow-y-auto transition-all duration-200 ease-linear absolute top-0 left-0
      ${sdClose.check ? '': "ssm:w-[300px] ssm:opacity-100 ssm:visible"}
    `}>
      <div
          class=" cursor-pointer flex justify-end p-1 pr-2 hover:text-hoc_red_400
      "
          onClick$={() =>
            {
              sdClose.check = true
              isClicked.value = true
            }

          }
      >
          <IconClose svgStyle="w-4 h-4 hover:text-red-400 " viewBoxStyle="0 0 15 15" />
      </div>

      <div class=" w-full px-4 pt-2 flex justify-between
          ssm:flex
      ">
          <button
              class={["w-28 h-8  border border-solid border-bo_black rounded-md" , isClicked.value ? "bg-bg_red_400 text-co_white" : "bg-bg_white text-co_black"]}
              onClick$={() => (isClicked.value = true)}
          >
              Category
          </button>
          <button
              class={["w-28 h-8  border border-solid border-bo_black rounded-md ", isClicked.value ? "bg-bg_white text-co_black" : "bg-bg_red_400 text-co_white"]}
              onClick$={() => (isClicked.value = false)}
          >
              Menu
          </button>
      </div>

     

        {isClicked.value ?
          <ul class="space-y-2 pt-4">
          {
            categoryList.map((category, categoryIndex) => (
              <li key={categoryIndex}>

                <div class="bg-bg_white border-b border-bo_gray-300 cursor-pointer font-bold px-4 py-2 rounded flex justify-between items-center hover:bg-hov_gray_100 "
                  onClick$={() =>
                    selectedCategory.value === categoryIndex
                      ? (selectedCategory.value = null)
                      : (selectedCategory.value = categoryIndex)
                  }
                >
                  <div class="flex justify-start items-center"

                  >
                    <div class="w-8 h-8">
                      <img width={100} height={100} src={phoneImage} alt="phone" class="w-full" />
                    </div>
                    <div>
                      {category.name}
                    </div>
                  </div>

                  <div class={["transition-all duration-200 ease-linear", selectedCategory.value === categoryIndex ? "rotate-90 text-co_red_400" : '' ]}>▶</div>
                </div>

                {selectedCategory.value === categoryIndex && category.subCategories.length > 0 && (
                  <ul class="mt-2 space-y-1 text-sm">
                    {category.subCategories.map((subCategory, subCategoryIndex) => (
                      <li key={subCategoryIndex} class="bg-bg_white border-b border-bo_gray_300">
                        <div
                          class="cursor-pointer font-medium pr-4 pl-6 pt-2 pb-1 rounded
                          
                          "
                          onClick$={() =>
                            selectedSubCategory.value === subCategoryIndex
                              ? (selectedSubCategory.value = null)
                              : (selectedSubCategory.value = subCategoryIndex)
                          }
                        >
                          {subCategory.name}
                        </div>

                        {selectedSubCategory.value === subCategoryIndex && subCategory.subSubCategories.length > 0 && (
                          <ul class="mt-1 space-y-1 bg-bg_gray_100">
                            {subCategory.subSubCategories.map((subSubCategory, subSubCategoryIndex) => (
                              <li
                                key={subSubCategoryIndex}
                                class="ml-4 px-4 py-2 rounded cursor-pointer 
                                "
                              >
                                {subSubCategory}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          }
          </ul>
        :
          <ul class="space-y-2 pt-4">
          {
            policiesAndInfo.map((policy, policyIndex) => (
              <li key={policyIndex} class="bg-bg_white border-b font-medium border-bo_gray_300">
                <div
                  class="cursor-pointer font-medium pr-4 pl-6 pt-2 pb-1 rounded hover:text-hoc_red_400"
                >
                  {policy}
                </div>
              </li>
            ))
          }
          </ul>

        }

    </aside>
  );
});


export default Sidebar;
