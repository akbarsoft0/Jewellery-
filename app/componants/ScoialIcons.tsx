import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

function ScoialIcons() {
  return (
    <div className="flex gap-2 py-2">
      <Link
        href="/"
        className="flex items-center justify-center text-slate-600 text-xl bg-gray-300 w-10 h-10 rounded-full"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center text-slate-600 text-xl bg-gray-300 w-10 h-10 rounded-full"
      >
        <FaFacebook />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center text-slate-600 text-xl bg-gray-300 w-10 h-10 rounded-full"
      >
        <FaInstagram />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center text-slate-600 text-xl bg-gray-300 w-10 h-10 rounded-full"
      >
        <FaTwitter />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center text-slate-600 text-xl bg-gray-300 w-10 h-10 rounded-full"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
}

export default ScoialIcons;
