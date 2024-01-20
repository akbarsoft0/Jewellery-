import { FaQuoteLeft } from "react-icons/fa";
import sara from "@/public/images/testimonial-3.jpg";
import Image from "next/image";
function Reviews() {
  return (
    <section>
      <div className="grid md:grid-cols-2">
        <h2>What people are saying about us</h2>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <article className="bg-gradient-to-br from-gray-700 rounded-2xl p-4 duration-500">
          <span className="text-4xl md:text-6xl text-main ">
            <FaQuoteLeft />
          </span>
          <p className="md:p-8 text-lg">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex items-center gap-2">
            <Image src={sara} className="w-12 h-12 rounded-full" alt="sara" />
            <div>
              <h5 className="capitalize font-semibold">sara kaan</h5>
              <h6 className="capitalize text-gray-400">founder $ leader</h6>
            </div>
          </div>
        </article>
        <article className="hover:bg-gradient-to-br from-gray-700 rounded-2xl p-4 duration-500">
          <span className="text-4xl md:text-6xl text-main ">
            <FaQuoteLeft />
          </span>
          <p className="md:p-8 text-lg">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex items-center gap-2">
            <Image src={sara} className="w-12 h-12 rounded-full" alt="sara" />
            <div>
              <h5 className="capitalize font-semibold">sara kaan</h5>
              <h6 className="capitalize text-gray-400">founder $ leader</h6>
            </div>
          </div>
        </article>
        <article className="hover:bg-gradient-to-br from-gray-700 rounded-2xl p-4 duration-500">
          <span className="text-4xl md:text-6xl text-main ">
            <FaQuoteLeft />
          </span>
          <p className="md:p-8 text-lg">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex items-center gap-2">
            <Image src={sara} className="w-12 h-12 rounded-full" alt="sara" />
            <div>
              <h5 className="capitalize font-semibold">sara kaan</h5>
              <h6 className="capitalize text-gray-400">founder $ leader</h6>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Reviews;
