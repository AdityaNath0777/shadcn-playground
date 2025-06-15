import { Button } from "@/components/ui/button";
import { FlameIcon } from "lucide-react";

const ButtonVariantsSection = () => {
  return (
    <section className="button-variants-section mt-10 space-y-4">
      <div className="flex flex-wrap justify-around items-center gap-4 p-2 rounded-sm">
        <button className="text-lg px-4 py-2 text-gray-50 rounded bg-blue-500 hover:bg-blue-700">
          Test button
        </button>
        <Button>Apun ka Button</Button>
        <Button variant={"outline"}>Outline Button</Button>
        <Button variant={"secondary"}>Secondary Button</Button>
        <Button variant={"ghost"}>Ghost Button</Button>
        <Button variant={"destructive"}>Destructive Button</Button>
        <Button variant={"link"}>Link Button</Button>
      </div>
    </section>
  );
};

const ButtonSizesSection = () => {
  return (
    <section className="button-sizes-section mt-10 space-y-4">
      <h2 className="text-lg font-bold font-mono w-full text-center">Size</h2>
      <div className="flex flex-wrap items-center justify-around gap-4 p-2 rounded-sm">
        <Button size={"lg"}>Large Apun ka Button</Button>
        <Button variant={"outline"} size={"sm"}>
          small Outline Button
        </Button>
        <Button variant={"secondary"} size={"default"}>
          Default Secondary Button
        </Button>
        <Button
          variant={"destructive"}
          size={"icon"}
          title="Icon text is overflowing as icon has limited width and height"
        >
          Icon: <FlameIcon />
        </Button>
        <Button variant={"ghost"} size={"lg"}>
          Large Ghost Button
        </Button>
        <Button variant={"link"}>Link Button</Button>
      </div>
    </section>
  );
};

const ButtonAsChildSection = () => {
  return (
    <section className="button-asChild-section mt-10 space-y-4">
      <h2 className="text-lg font-bold font-mono w-full text-center">
        As Child
      </h2>
      <p className="font-mono w-full text-center">
        To pass all the props to the child element. <br /> This helps to change
        the type of the element while retaining the components&apos; logic and
        styling using radix&apos;s <code>Slot</code> component to clone and
        inject the props to it&apos;s children{" "}
      </p>
      <div className="flex flex-wrap items-center justify-around gap-4 p-2 rounded-sm">
        <Button>Apun ka Button</Button>
        <Button variant={"outline"} size={"sm"}>
          Outline Button
        </Button>
        <Button variant={"secondary"} size={"default"}>
          Secondary Button
        </Button>
        <Button variant={"ghost"} size={"lg"}>
          Ghost Button
        </Button>
        <Button variant={"destructive"} size={"icon"}>
          <FlameIcon />
        </Button>
        <Button variant={"link"}>Link Button</Button>
      </div>
    </section>
  );
};

function ChaiPage() {
  return (
    <main className="h-full flex flex-col gap-2 justify-center items-center max-w-2xl mx-auto">
      <h1 className="text-2xl tracking-wider font-['monospace']  ">
        Chai ☕ aur ShadCN 🗿
      </h1>
      <ButtonVariantsSection />
      <ButtonSizesSection />
      <ButtonAsChildSection />
    </main>
  );
}

export default ChaiPage;
