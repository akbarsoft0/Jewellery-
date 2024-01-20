import Image from "next/image";
import Hero from "./componants/Hero";
import hand from "@/public/images/hand.png";
import Counters from "./componants/Counters";
import Work from "./componants/Work";
import Payment from "./componants/Payment";
import Contacts from "./componants/Contacts";
import Reviews from "./componants/Reviews";
function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* <Counters /> */}
      <Work />
      <Payment />
      <Reviews />
      <Contacts />
    </div>
  );
}

export default Home;
