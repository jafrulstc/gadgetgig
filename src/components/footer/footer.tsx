import { component$ } from "@builder.io/qwik";
import xiaomi11iBlue from '~/asset/images/products/Xiaomi_11i_5G_blue_1600.webp';
import { IconFacebook, IconInstagram, IconLinkeDin, IconTiktok, IconYoutube } from "../svgIcons/icons";

const Footer = component$(() => {
    return (
        <>

            <footer class="w-full h-auto bg-bg_black text-co_white">
                <div class="max-w-[1440px] p-4 m-auto">

                    <section class="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
                        <div class="image flex justify-center sm:justify-start">
                            <img width="100" height="100" class="w-20 h-20 sm:w-[100px] sm:h-[100px]" src={xiaomi11iBlue} alt="xiaomi11iBlue" />
                        </div>
                        <div class="contact text-center sm:text-left">
                            <h4 class="text-lg font-semibold">Contact Us</h4>
                            <p class="text-sm">jafrulstc@gmail.com</p>
                        </div>
                        <div class="customer-service text-center sm:text-left">
                            <h4 class="text-lg font-semibold">Customer Service</h4>
                            <p class="text-sm">jafrulstc@gmail.com</p>
                        </div>
                    </section>

                    <section class="flex flex-wrap sm:flex-nowrap justify-between gap-8 mt-8">
                        <div class="web-info grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div class="about">
                                <h2 class="text-co_red_500 text-sm sm:text-lg font-semibold">About Us</h2>
                                <ul class="text-xs sm:text-sm">
                                    <li>About Us</li>
                                    <li>Shop Address</li>
                                    <li>Blog</li>
                                    <li>Contact Us</li>
                                    <li>Complain By Advise</li>
                                </ul>
                            </div>
                            <div class="Ppolicy">
                                <h2 class="text-co_red_500 text-sm sm:text-lg font-semibold">Policy</h2>
                                <ul class="text-xs sm:text-sm">
                                    <li>Privacy Policy</li>
                                    <li>EMI Policy</li>
                                    <li>Warranty Policy</li>
                                    <li>Exchange Policy</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div class="product-delivery">
                                <h2 class="text-co_red_500 text-sm sm:text-lg font-semibold">Product Delivery</h2>
                                <ul class="text-xs sm:text-sm">
                                    <li>Delivery and Return</li>
                                    <li>Refund and Return Policy</li>
                                    <li>Order Tracking</li>
                                    <li>Terms And Conditions</li>
                                </ul>
                            </div>
                            <div class="acategorybout">
                                <h2 class="text-co_red_500 text-sm sm:text-lg font-semibold">Category</h2>
                                <ul class="text-xs sm:text-sm">
                                    <li>Trimmer</li>
                                    <li>Hair Dryer</li>
                                    <li>Used</li>
                                </ul>
                            </div>
                        </div>
                        <div class="social flex flex-col items-center sm:items-end gap-4">
                            <div class="social-icon flex gap-2">
                                <IconFacebook svgStyle="w-5 h-5 sm:w-6 sm:h-6 hover:text-primary pointer" />
                                <IconYoutube svgStyle="w-5 h-5 sm:w-6 sm:h-6 hover:text-primary pointer" />
                                <IconLinkeDin svgStyle="w-5 h-5 sm:w-6 sm:h-6 hover:text-primary pointer" />
                                <IconTiktok svgStyle="w-5 h-5 sm:w-6 sm:h-6 hover:text-primary pointer" />
                                <IconInstagram svgStyle="w-5 h-5 sm:w-6 sm:h-6 hover:text-primary pointer" />
                            </div>
                            <button class="w-full sm:w-64 bg-primary p-2 rounded-lg text-sm sm:text-2xl text-co_white">
                                STORE LOCATOR
                            </button>
                        </div>
                    </section>
                </div>
            </footer>


        </>
    )
});

export default Footer;