import Image from "next/image";
import globe from "@/public/images/globe-removebg-preview.png";
function Hero() {
  return (
    <section className="reative hero">
      <div className="grid md:grid-cols-2 items-center">
        <article className="grid">
          <div className="flex h-20 font-semibold text-md justify-center rounded-lg text-semibold uppercase items-center sm:w-[400px] bg-gradient-to-t to-black  text-white p-2">
            <span className="w-6 h-6 rounded-full bg-main flex items-center justify-center me-2 lowercase font-bold">
              i
            </span>
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </div>
          <h2 className="text-2xl md:text-8xl py-4">
            Next generation <br />
            <span className="text-main">Payment</span> Ways.
          </h2>
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </article>
        <div className="">
          <Image src={globe} alt="hero" className="" width={600} height={600} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
