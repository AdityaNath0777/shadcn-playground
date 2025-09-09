"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Links = [
  {
    label: "Button",
    href: "/chai",
    color: "yellow",
  },
  {
    label: "Accordion",
    href: "/chai",
    color: "dark-gray",
  },
  {
    label: "Dropdown",
    href: "/dropdown",
    color: "blue",
  },
  {
    label: "Search Bar",
    href: "/search-bar",
    color: "green",
  },
  {
    label: "Dialog",
    href: "/dialog",
    color: "yellow",
  },
  {
    label: "Keyboard",
    href: "/keyboard",
    color: "black",
  },
];

function Navbar() {
  const LinkColorClassMap: Record<string, string> = {
    yellow: "bg-yellow-400 hover:bg-yellow-500",
    red: "bg-red-400 hover:bg-red-500",
    green: "bg-green-400 hover:bg-green-500",
    blue: "bg-blue-400 hover:bg-blue-500",
    gray: "bg-gray-400 hover:bg-gray-500",
    "dark-gray": "bg-gray-700 hover:bg-gray-800",
    black: "bg-black text-white ring-1 hover:bg-neutral-900"
  };

  return (
    <nav className="space-y-4 p-2">
      <ul className="flex flex-wrap justify-around items-center gap-2 flex-1">
        {Links.map((link) => (
          <li key={`component-link-${link.label}`}>
            <Button
              variant={"default"}
              className={`${LinkColorClassMap[link.color]} text-white`}
              size={"lg"}
              asChild
            >
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
