import { Keyboard, Keyboard2 } from "@/components/keyboard";
import React from "react";

function page() {
  return (
    <div className="">
      <div className="flex flex-col justify-center h-full mx-auto max-w-3xl rounded-md">
        <h3 className="text-center">My Custom Keyboard</h3>
        <div className="flex mx-auto items-center justify-center text-white">
          <Keyboard />
        </div>
        <h3 className="text-center">My Custom Keyboard #2</h3>

        <div className="flex mx-auto items-center justify-center text-white">
          <Keyboard2 />
        </div>
      </div>
    </div>
  );
}

export default page;
