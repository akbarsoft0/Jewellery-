import Link from "next/link";
import Button from "./Button";
import NavButton from "./NavButton";

const Header = () => {

  return (
    <header className="h-20 flex items-center justify-between p-2 gap-2 sticky top-0 bg-slate-800 z-50">
      <h1>
        <Link href="/" className="text-4xl font-bold uppercase hover:text-main">
          logo
        </Link>
      </h1>
      <nav className="hidden md:flex justify-evenly gap-8 text-gray-400">
        <Link href="/">home</Link>
        <Link href="/products">products</Link>
        <Link href="/featurse">featurse</Link>
        <Link href="/blogs">blogs</Link>
        <Link href="/portfolio">portfoilo</Link>
        <Link href="/contacts">contact us</Link>
      </nav>
      <div className="hidden md:flex">
        <Button />
      </div>
      <NavButton />
    </header>
  );
};

export default Header;
