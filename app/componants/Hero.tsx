import Image from "next/image";
import img1 from "@/public/images/Payment-Gateway-Hero-Image-1.webp";
import img2 from "@/public/images/Payment-Gateway-Hero-Image-2.webp";
import img3 from "@/public/images/Payment-Gateway-Hero-Image-3.webp";
import Element from "@/public/images/Payment-Gateway-Hero-Element.webp";
import hand from "@/public/images/hand.png";

function Hero() {
  return (
    <section className="reative">
      <div className="grid md:grid-cols-2 items-center">
        <article className="grid gap-8">
          <h4 className="flex h-14 justify-center rounded-lg text-semibold uppercase items-center sm:w-[400px] bg-gradient-to-t from-slate-400 to-gray-800  text-white p-2">
            <span className="w-6 h-6 rounded-full bg-main flex items-center justify-center me-2 lowercase font-bold">
              i
            </span>
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </h4>
          <h2 className="text-6xl">
            Next generation <br />
            <span className="text-main">Payment</span> Ways.
          </h2>
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </article>
        <div className="flex flex-col items-center relative">
          {/* cards */}
          <Image src={img3} alt="img3" width={300} height={10} />
          <Image
            src={img2}
            className="-my-28 z-10"
            alt="img2"
            width={300}
            height={10}
          />
          <Image
            src={img1}
            className="-z-4"
            alt="img1"
            width={300}
            height={10}
          />

          {/* balls */}
          <Image
            src={Element}
            className="absolute left-5"
            alt="img3"
            width={90}
            height={90}
          />
          <Image
            src={Element}
            className="absolute left-28 bottom-28"
            alt="img3"
            width={30}
            height={30}
          />
          <Image
            src={Element}
            className="absolute right-28 bottom-28"
            alt="img3"
            width={60}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
