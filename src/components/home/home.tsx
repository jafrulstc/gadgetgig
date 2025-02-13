import { component$ } from "@builder.io/qwik";
import Banner from "~/components/banner/banner";
import TopCategories from "~/components/products/top_categories";
import NewProducts from "~/components/products/new_products";
import AllProducts from "~/components/products/all_products";
import AccessoriesBanner from "~/components/banner/exesories_banner";
import PopularBanner from "~/components/banner/popularProBan";
import PopularProducts from "~/components/products/popularPro";
import SmartWatchBanner from "~/components/banner/smartwatch";
import SmartWatchPro from "~/components/products/smart_watch_pro";
import UnknownBan from "~/components/banner/unknown_ban";
import ComingSoonBan from "~/components/banner/commingsoonBan";

const Home = component$( ()=> {
    return (
        <>
            <Banner />
            <TopCategories />
            <NewProducts />
            <AccessoriesBanner />
            <AllProducts />
            <PopularBanner />
            <PopularProducts />
            <SmartWatchBanner />
            <SmartWatchPro />
            <UnknownBan />
            <ComingSoonBan />
        </>
    )
})

export default Home