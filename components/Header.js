import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between bg-white z-10 py-6 items-center sticky top-0">
            <h1 className="font-extrabold text-3xl">TC Portfolio</h1>
            <div>
                <ul className="flex items-center gap-8 font-normal text-black">
                    <li>
                        <Link href="#home" className="hover:text-slate-700">Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className="hover:text-slate-700">About</Link>
                    </li>
                    <li>
                        <Link href="#portfolio" className="hover:text-slate-700">Porfolio</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-slate-700">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;