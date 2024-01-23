import Link from "next/link";
import React from "react";
import { FaLocationDot, FaEnvelope, FaPhoneVolume } from "react-icons/fa6";

function page() {
    return (
        <section className="">
            <div className="grid md:grid-cols-3 gap-4 p-4">
                <article className="flex flex-col items-center p-4 rounded-2xl bg-gray-600">
                    <h2 className="text-main text-4xl">
                        <FaLocationDot />
                    </h2>
                    <h3 className="text-main text-2xl font-semibold capitalize">visit us</h3>
                    <address className="text-center">50, 11c,<br /> Neelkanth Colony, Vidhyut Nagar, <br />Jaipur, Rajasthan 302021
                    </address>
                </article>
                <article className="flex flex-col items-center p-4 rounded-2xl bg-gray-600">
                    <h2 className="text-main text-4xl">

                        <FaEnvelope />
                    </h2>
                    <h3 className="text-main text-2xl font-semibold capitalize">email us</h3>
                    <Link href="mailto:abc@gmail.com">abc@gmail.com</Link>
                    <Link href="mailto:abc@gmail.com">abc@gmail.com</Link>
                </article>
                <article className="flex flex-col items-center p-4 rounded-2xl bg-gray-600">
                    <h2 className="text-main text-4xl">
                        <FaPhoneVolume />
                    </h2>
                    <h3 className="text-main text-2xl font-semibold capitalize">call us</h3>
                    <Link
                        href="tel:+918058888861"
                    >
                        +91-8058888861
                    </Link>
                </article>
            </div>
            <div className="grid md:grid-cols-2 gap-2 p-4 md:p-12 bg-gray-600 rounded-2xl">
                <div className="">
                    <h5 className="text-main font-semibold capitalize">contact</h5>
                    <h2>Get in Touch</h2>
                    <p>
                        Write us a few words about your project or ask us any questions and
                        we will respond to you within 1 business day
                    </p>

                    <form action="" className="md:grid gap-2">
                        <div>
                            <label htmlFor="name" className="capitalize text-main font-semibold">
                                name
                            </label>
                            <input type="text" id="name" placeholder="name" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="capitalize text-main font-semibold">company</label>
                            <input type="text" id="company" placeholder="Company" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="capitalize text-main font-semibold">phone number</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="phone number"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="capitalize text-main font-semibold">email</label>
                            <input type="text" id="email" placeholder="email" required />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="massage" className="capitalize text-main font-semibold">massage</label>
                            <textarea
                                className="w-full h-40 mb-4"
                                name="massage"
                                id="massage"
                                placeholder="massage"
                            ></textarea>
                        </div>
                        <button className="w-40 h-12 capitalize font-semibold bg-main rounded-xl y-4">
                            submit
                        </button>
                    </form>
                </div>
                <div className="w-full h-full md:p-8 rounded-2xl">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.29768496758!2d75.75531340486019!3d26.90113312646174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4896d56aaab%3A0xccfee814f965dbcc!2sJewellery%20it!5e0!3m2!1sen!2sin!4v1705995873292!5m2!1sen!2sin"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default page;
