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
    href: "/projects",
  },
];

export default function Header() {
  return (
    <header className="bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between w-full">
        <div className="font-bold text-3xl">
          <Link href={navLinks[0].href}>{navLinks[0].name}</Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
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
