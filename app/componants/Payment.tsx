import Button from "./Button";

function Payment() {
  return (
    <section className="grid md:grid-cols-2 items-center ">
      <article className="relative center">
        {/* <div className="absolute w-60 h-60 rounded-xl bg-gradient-to-tr from-slate-800">
          1
        </div>
        <div className="center absolute w-80 h-80 rounded-xl bg-gradient-to-tr from-slate-800">
          2
        </div> */}
      </article>
      <article className="">
        <h2 className="text-4xl font-bold">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-slate-400 my-8">
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
