import { SearchBar1, SearchBar2 } from "@/components/search";
import React from "react";

function SearchBarPage() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 justify-center h-full mx-auto max-w-3xl rounded-md shadow-md p-4">
        <div className="space-y-2">
          <p>with Input and Button Component</p>
          <SearchBar1 />
        </div>
        <div className="space-y-2">
          <p className="">With Command Components</p>
          <SearchBar2 />
        </div>
      </div>
    </div>
  );
}

export default SearchBarPage;
