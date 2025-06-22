import React from "react";
import BackButton from "../buttons/BackButton";
import { ModeToggle } from "../theme/ModeToggle";

function Header() {
  return (
    <div className="w-full flex gap-4 items-center">
      <BackButton />
      <ModeToggle />
    </div>
  );
}

export default Header;
