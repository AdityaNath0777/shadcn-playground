"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      className="cursor-pointer"
      disabled={pathname === "/"}
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Go Back from <code>{pathname}</code>
    </Button>
  );
}

export default BackButton;
