import React from "react";
import Button from "./Button";
import { FaStar } from "react-icons/fa6";
export default function Work() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <article className="">
        <h2 className="text-4xl font-bold">
          You do the business, we’ll handle the money.
        </h2>
        <p className="text-slate-400 my-8">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </article>
      <div className="grid gap-4">
        <div className="flex rounded-2xl bg-gradient-to-b from-slate-800 gap-2 p-4 hover:bg-slate-900 duration-300">
          <div className="">
            <span className="center w-10 h-10 rounded-full center bg-main/35 text-main text-2xl">
              <FaStar />
            </span>
          </div>
          <div>
            <h3 className="capitalize text-white font-bold text-lg">rewards</h3>
            <p className="text-m text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              omnis commodi quae molestias, veritatis iusto.
            </p>
          </div>
        </div>
        <div className="flex rounded-2xl  gap-2 p-4 bg-slate-900 duration-300">
          <div className="">
            <span className="center w-10 h-10 rounded-full center bg-main/35 text-main text-2xl">
              <FaStar />
            </span>
          </div>
          <div>
            <h3 className="capitalize text-white font-bold text-lg">rewards</h3>
            <p className="text-m text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              omnis commodi quae molestias, veritatis iusto.
            </p>
          </div>
        </div>
        <div className="flex rounded-2xl bg-gradient-to-b from-slate-800 gap-2 p-4 hover:bg-slate-900 duration-300">
          <div className="">
            <span className="center w-10 h-10 rounded-full center bg-main/35 text-main text-2xl">
              <FaStar />
            </span>
          </div>
          <div>
            <h3 className="capitalize text-white font-bold text-lg">rewards</h3>
            <p className="text-m text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              omnis commodi quae molestias, veritatis iusto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
