"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "./Container";
import navLinks from "@/data/navLinks";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800">
      <Container>
        <div className="navbar px-0 h-20">

          {/* Logo */}
          <div className="navbar-start">

            <Link
              href="/"
              className="text-2xl font-bold text-primary"
            >
              Fahim<span className="text-white">.</span>
            </Link>

          </div>
          <ThemeToggle />

          {/* Desktop Menu */}

          <div className="navbar-center hidden lg:flex">

            <ul className="menu menu-horizontal gap-2">

              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}

            </ul>

          </div>

          {/* Resume */}

          <div className="navbar-end hidden lg:flex">

            <a
              href="/resume/Fahim-Ahmed-Resume.pdf"
              download
              className="btn btn-primary rounded-xl"
            >
              Resume
            </a>

          </div>

          {/* Mobile */}

          <div className="navbar-end lg:hidden">

            <div className="dropdown dropdown-end">

              <label tabIndex={0} className="btn btn-ghost">

                <Menu />

              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-56 rounded-box bg-base-100 shadow-xl z-[1]"
              >
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}

                <li className="mt-2">
                  <a
                    href="/resume/Fahim-Ahmed-Resume.pdf"
                    download
                    className="btn btn-primary"
                  >
                    Resume
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </Container>
    </header>
  );
}