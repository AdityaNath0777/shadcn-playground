import React from "react";
import BackButton from "../buttons/BackButton";
import { ModeToggle } from "../theme/ModeToggle";
import { SearchBar2 } from "../search";

function Header() {
  return (
    <div className="w-full flex gap-4 items-center">
      <BackButton />
      <ModeToggle />
      <SearchBar2 />
    </div>
  );
}

export default Header;
