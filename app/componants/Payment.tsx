import Image from "next/image";
import Button from "./Button";
import ring from "@/public/images/Hero.png";

function Payment() {
  return (
    <section className="grid md:grid-cols-2 items-center ">
      <div>
        <Image src={ring} alt="ring" className="rounded-xl" width={400} />
      </div>
      <article>
        <h2>Easily control your billing & invoicing.</h2>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </article>
    </section>
  );
}

export default Payment;
