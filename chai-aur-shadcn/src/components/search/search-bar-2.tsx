"use client";

import React, { useState } from "react";
import { Command, CommandInput } from "../ui/command";
import { Button } from "../ui/button";

export function SearchBar2() {
  const [searchText, setSearchText] = useState("");

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // for div this method is undefined
  //   alert("Searching...");
  // };

  return (
    <Command className="max-w-80" >
      {/* This form will throw error if used with asChild */}
      {/* <form onSubmit={handleSearch}>  */}
        <CommandInput
          value={searchText}
          onValueChange={(value) => setSearchText(value)}
          placeholder="Search here... ⌘"
        />
        <Button type="submit" className="sr-only" title="search">
          Search
        </Button>
      {/* </form> */}
    </Command>
  );
}
