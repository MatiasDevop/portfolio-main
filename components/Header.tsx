import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-neutral-900 dark:text-white">
      <div className="page-container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mat<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ThemeToggle />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
