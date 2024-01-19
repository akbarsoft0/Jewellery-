import Link from "next/link";

function Button() {
  return (
    <Link
      href="/"
      className="capitalize flex items-center justify-center w-[150px] h-12 bg-main hover:opacity-60 active:scale-95 rounded-lg text-xl font-semibold text-black"
    >
      get started
    </Link>
  );
}

export default Button;
