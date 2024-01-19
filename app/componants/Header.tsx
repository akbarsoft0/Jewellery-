import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between p-2 gap-2">
      <h1>
        <Link href="/" className="text-2xl font-bold uppercase hover:text-main">
          logo
        </Link>
      </h1>
      <nav className="hidden md:flex flex-1 justify-evenly items-baseline text-slate-400 font-semibold">
        <Link
          href="/"
          className="font-semibold capitalize hover:text-main border-b-2 border-b-transparent  hover:border-main duration-300"
        >
          home
        </Link>
        <Link
          href="/pages"
          className="font-semibold capitalize hover:text-main border-b-2 border-b-transparent  hover:border-main duration-300"
        >
          pages
        </Link>
        <Link
          href="/featires"
          className="font-semibold capitalize hover:text-main border-b-2 border-b-transparent  hover:border-main duration-300"
        >
          featurse
        </Link>
        <Link
          href="/blog"
          className="font-semibold capitalize hover:text-main border-b-2 border-b-transparent  hover:border-main duration-300"
        >
          blog
        </Link>
        <Link
          href="/portfolio"
          className="font-semibold capitalize hover:text-main border-b-2 border-b-transparent  hover:border-main duration-300"
        >
          portfoilo
        </Link>
        <Link
          href="/shop"
          className="font-semibold capitalize hover:text-main border-b-2 border-b-transparent  hover:border-main duration-300"
        >
          shop
        </Link>
      </nav>
      <Button />
    </header>
  );
};

export default Header;
