import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CrossIcon } from "lucide-react";
import React from "react";

function DialogPage() {
  return (
    <div className="flex flex-col justify-center h-full mx-auto max-w-3xl rounded-md">
      Dialog page
      <div className="mt-10 w-full"></div>
      {/* <section className="dialog-section"> */}
      {/* <div className="dialog-container bg-gray-50 shadow-md ring-1 ring-gray-400/60"> */}
      <Dialog>
        <DialogTrigger
          className="bg-gray-900 text-white"
          // asChild
        >
          {/* <Button> */}
          Open Dialog Box
          {/* </Button> */}
        </DialogTrigger>
        <DialogContent>
          <DialogClose>
            <CrossIcon />
          </DialogClose>
          <DialogHeader>
            <DialogTitle>Are you sure you want to do it?</DialogTitle>
            <DialogDescription>
              This action will take you on the journey to West where you will be
              seen dancing with Monkey King while being drunk
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>This is footer of the dialog</DialogFooter>
        </DialogContent>
      </Dialog>
      {/* </div> */}
      {/* </section> */}
    </div>
  );
}

export default DialogPage;
