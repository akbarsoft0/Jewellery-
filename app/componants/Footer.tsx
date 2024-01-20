import Link from "next/link";
import ScoialIcons from "./ScoialIcons";

const Footer = () => {
  return (
    <footer className="p-4 pb-0">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="">
          <h2>
            <Link href="/" className="">
              logo
            </Link>
          </h2>
          <h6 className="py-4 font-semibold text-slate-300">
            A new way to make the payments easy, reliable and 100% secure.
          </h6>
          <div>
            <ScoialIcons />
          </div>
        </div>
        <ul className="grid gap-4 text-slate-400 font-semibold pb-4">
          <li>
            <h4 className="uppercase font-bold text-lg text-white">
              Usefull Links
            </h4>
          </li>
          <li>
            <Link href="/">Content</Link>
          </li>
          <li>
            <Link href="/">How it Works</Link>
          </li>
          <li>
            <Link href="/">Create</Link>
          </li>
          <li>
            <Link href="/">Explore</Link>
          </li>
          <li>
            <Link href="/">Terms & Services</Link>
          </li>
        </ul>
        <ul className="grid gap-4 text-slate-400 font-semibold pb-4">
          <li>
            <h4 className="uppercase font-bold text-lg text-white">
              Community
            </h4>
          </li>
          <li>
            <Link href="/">Help Center</Link>
          </li>
          <li>
            <Link href="/">Partners</Link>
          </li>
          <li>
            <Link href="/">Newsletters</Link>
          </li>
          <li>
            <Link href="/">Suggestions</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>
        <ul className=" text-slate-400 font-semibold pb-4">
          <li>
            <h4 className="uppercase font-bold text-lg text-white">Partners</h4>
          </li>
          <li className="py-2">
            <Link href="/">Our Partner</Link>
          </li>
          <li className="py-2">
            <Link href="/">Become a Partner</Link>
          </li>
        </ul>
      </div>
      <div className="md:flex justify-between py-8 border-t">
        <h6>&copy; UiCore 2020 All Rights Reserved.</h6>
        <ScoialIcons />
      </div>
    </footer>
  );
};

export default Footer;
