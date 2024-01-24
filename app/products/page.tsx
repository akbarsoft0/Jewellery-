import Image from "next/image";
import Button from "../componants/Button";
import erp from "@/public/images/erp.webp";
import mgf from "@/public/images/mgf.jpg";
import shop from "@/public/images/shop.webp";

function page() {
    return (
        <section className="">
            <article className="grid lg:grid-cols-2 items-center gap-4 py-8">
                <Image src={erp} alt="erp" className="rounded-xl" />
                <div>
                    <h3 className="text-4xl text-main">Jewellery ERP</h3>
                    <h4 className="text-lg">
                        Streamlining Jewellery Business Operations with Our Comprehensive ERP
                        Solution
                    </h4>
                    <p className="font-normal">
                        Welcome to our all-in-one Jewellery ERP Software, a cutting-edge
                        solution tailored for the Gems and Jewellery Industry. Our product
                        seamlessly integrates essential business modules, including
                        Manufacturing, Wholesaling, POS, CRM, and E-Commerce, providing a
                        smart and dynamic solution for businesses across the spectrum.
                    </p>
                    <Button />
                </div>
            </article>

            <article className="grid lg:grid-cols-2 items-center gap-4 py-8">
                <Image src={mgf} alt="erp" className="rounded-xl lg:order-2" />
                <div>
                    <h3 className="text-4xl text-main">Jewellery MFG</h3>
                    <h4 className="text-lg">
                        Simplifying Jewellery Manufacturing with Our Comprehensive Jewellery
                        MFG Module
                    </h4>
                    <p className="font-normal">
                        Our Jewellery MFG module is tailor-made for all types of jewellery
                        manufacturers, be it Diamond Jewellery, Kundan-Meena Jewellery, Silver
                        Jewellery, or Casting/Handmade Jewellery. This module is designed to
                        streamline and enhance all functions within a jewellery manufacturing
                        factory.
                    </p>
                    <Button />
                </div>

            </article>

            <article className="grid lg:grid-cols-2 items-center gap-4 py-8">
                <Image src={shop} alt="erp" className="rounded-xl" />
                <div>
                    <h3 className="text-4xl text-main">Jewellery SHOP</h3>
                    <h4 className="text-lg">
                        Streamlining Retail Operations with Jewellery SHOP Module
                    </h4>
                    <p className="font-normal">
                        Our Jewellery SHOP module is crafted for retail jewellery shops,
                        offering a comprehensive solution for purchase management, inventory
                        control, barcode/QRCode/RFID printing, sales and approvals, and
                        GST-enabled billing with complete accounting functionalities. This
                        user-friendly module is suitable for any jewellery showroom or B2C
                        company, featuring unique and convenient tools for efficient
                        operations.
                    </p>
                    <Button />
                </div>
            </article>
        </section>
    );
}

export default page;
