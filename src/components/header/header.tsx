import { component$, createContextId, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";

import headerStyle from '~/asset/css/header/header.css?inline'
import Logo from "~/components/header/logo";
import NavigationMenu from "./navigationmenu";
import ProductCategories from "../products/product_categories";
import Sidebar from "~/components/header/sidebar";

export const sideBarClose = createContextId<{check: boolean}>("ddd")

//header.tsx
const Header = component$(() => {
    useStyles$(headerStyle);
    const sdClose = useStore({check: true});
    useContextProvider(sideBarClose, sdClose);

    return (
        <header class="w-full bg-[#000000] fixed z-10">
            <div class="max-w-[1440px] max-h-14 md:max-h-24 p-4 m-auto flex justify-between items-center text-co_white">
                <Logo/>
                <NavigationMenu />
            </div>
            <div class={` w-full bg-bg_gray_600
                ${sdClose.check ? "ssm:hidden" : ""} ssm:hidden
            `}>
                <div class="max-w-[1300px] h-16 m-auto
                ">
                    <ProductCategories />
                </div>
            </div>

            <Sidebar />

        </header>
    )
});

export default Header


// None	width: 100%;
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// 2xl (1536px)	max-width: 1536px;



