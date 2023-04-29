import Link from "next/link";
import Container from "./Container";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Header() {
  return (
    <div className="sticky top-0 border-b bg-white">
      <Container>
        <header className="flex justify-between z-10 py-6 items-center">
          <h1 className="font-extrabold text-3xl">TC Portfolio</h1>
          <button className="inline md:hidden">
            <HiOutlineMenuAlt1 size={40} />
          </button>
          <div className="hidden md:inline">
            <ul className="flex items-center gap-8 font-normal text-black">
              <li>
                <Link href="#home" className="hover:text-slate-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-slate-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-slate-700">
                  Porfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-slate-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </Container>
    </div>
  );
}

export default Header;
