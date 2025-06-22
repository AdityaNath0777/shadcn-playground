import { MyDropdownMenu } from "@/components/my-dropdowns/my-dropdown-menu";
import React from "react";

function DropdownPage() {
  return (
    <div className="h-screen">
      <div className="flex flex-col mx-auto">
        <MyDropdownMenu
          title="Hi, click here to know more"
          label="Bro, did you lift some weights, today?"
          items={[
            "No, Me sorry 😞",
            "I can't, me weak! 😣",
            "Yes, I did 🫡",
            "Ofc, I did 5 sets of 100 reps 🗿",
          ]}
        />
      </div>
    </div>
  );
}

export default DropdownPage;
