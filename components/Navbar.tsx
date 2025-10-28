"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/http", label: "HTTP & HTTPS" },
    { href: "/domain", label: "Nama Domain" },
    { href: "/hosting", label: "Hosting" },
    { href: "/dns", label: "DNS" },
    { href: "/browser", label: "Browser" },
  ];

  return (
    <header className="bg-sky-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🌐 InternetLearn
        </Link>
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "font-semibold underline"
                      : "hover:text-yellow-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
