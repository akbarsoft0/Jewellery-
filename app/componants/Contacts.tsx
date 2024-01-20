import React from "react";
import Button from "./Button";

function Contacts() {
  return (
    <section className="">
      <div className="md:flex items-center box p-4">
        <article className="">
          <h2>You do the business, we’ll handle the money.</h2>
          <p className="py-4 md:py-8">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </article>
        <div>
          <Button />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
