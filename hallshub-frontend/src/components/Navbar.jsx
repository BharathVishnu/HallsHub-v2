import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="font-mont flex flex-row items-center justify-center md:justify-start ml-4 md:ml-24 gap-6 md:gap-24 py-4 mt-10 md:mt-2">
      <Link
        href="/book"
        className={`text-3xl font-bold pb-2 md:pb-0 ${
          router.pathname === "/book"
            ? "text-white border-b-4 border-white"
            : "text-gray-400 hover:text-black"
        }`}
      >
        book
      </Link>

      <Link
        href="/events"
        className={`text-3xl font-bold pb-2 md:pb-0 ${
          router.pathname === "/events"
            ? "text-white border-b-4 border-white"
            : "text-gray-400 hover:text-black"
        }`}
      >
        events
      </Link>
    </nav>
  );
};

export default Navbar;
