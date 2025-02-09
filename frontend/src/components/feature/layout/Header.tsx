import SearchBar from "@/components/SearchBar";
import { Github } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Cov'Aire",
    href: "/",
  },
  {
    name: "Github",
    href: "https://github.com/mohamed-rahmani/CovAire",
  },
];

export default function Header() {
  return (
    <header className="bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="font-bold text-3xl">
            <Link href={navLinks[0].href}>{navLinks[0].name}</Link>
          </div>
          <Link
            href={navLinks[1].href}
            className="flex gap-1 hover:text-gray-600 md:hidden"
          >
            <Github size={20} />
            {navLinks[1].name}
          </Link>
        </div>

        <div className="w-full md:mx-auto md:w-auto">
          <SearchBar />
        </div>

        <div className="hidden md:block">
          <Link
            href={navLinks[1].href}
            className="flex gap-1 hover:text-gray-600"
          >
            <Github size={20} />
            {navLinks[1].name}
          </Link>
        </div>
      </nav>
    </header>
  );
}
