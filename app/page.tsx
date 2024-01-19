import Image from "next/image";
import Hero from "./componants/Hero";
import hand from "@/public/images/hand.png";
import Counters from "./componants/Counters";
import Work from "./componants/Work";
import Payment from "./componants/Payment";
function Home() {
  return (
    <div className="relative">
      <Hero />
      {/* <Counters /> */}
      <Work />
      <Payment />
    </div>
  );
}

export default Home;
