import { component$ } from "@builder.io/qwik";
import FilterProducts from "~/components/filter_products/filter_products";

const ProductsFilter = component$( ()=> {
  return <FilterProducts />
} );

export default ProductsFilter;