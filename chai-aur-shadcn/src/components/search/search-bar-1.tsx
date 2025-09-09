"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

export function SearchBar1() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (searchText.length > 0) {
      alert("Searching...");
    }
  };

  return (
    <div className="flex items-center max-w-80 border-b border-gray-400/50 focus-within:border-gray-400">
      <Button
        onClick={handleSearch}
        variant={"ghost"}
        size={"default"}
        type="submit"
      >
        <SearchIcon className="size-4 shrink-0 opacity-50" />
      </Button>
      <Input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-80 border-0 selection:bg-blue-400 focus-visible:outline-0 focus-visible:ring-0"
        placeholder="Search..."
      />
    </div>
  );
}
