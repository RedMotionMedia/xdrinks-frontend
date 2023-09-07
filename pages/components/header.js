import Link from "next/link";

const Header = () => (
    <header className="fixed w-full flex justify-between p-4">
        <div className="pl-4 pr-8">
            <Link href="/">XDrinks</Link>
        </div>
        <div className="flex">
            <div className="pl-4 pr-8">
                <Link href="/">Home</Link>
            </div>
            <div className="pl-4 pr-8">
                <Link href="/about">About</Link>
            </div>
            <div className="pl-4 pr-8">
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </header>
);

export default Header;