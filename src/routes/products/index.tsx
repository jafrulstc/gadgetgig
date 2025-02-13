import { component$ } from "@builder.io/qwik";
import FilterProducts from "~/components/filter_products/filter_products";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

const ProductsFilter = component$( ()=> {
  return (
    <>
    <Header />
    <FilterProducts />
    <Footer />
    </>
  )
} );

export default ProductsFilter;