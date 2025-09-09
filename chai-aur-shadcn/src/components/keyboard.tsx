import {
  ChevronUpIcon,
  CommandIcon,
  FastForwardIcon,
  GlobeIcon,
  MicIcon,
  MoonIcon,
  OptionIcon,
  PlayIcon,
  SearchIcon,
  SkipForwardIcon,
  SunDimIcon,
  SunIcon,
  Table2Icon,
  Volume1Icon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react";
import React from "react";

function KeyRoot({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`key-btn rounded-lg bg-black shadow-md ring-1 shadow-gray-100/50 ring-gray-50/20 transition-all duration-100 hover:scale-90 hover:shadow-transparent ${className}`}
    >
      {children}
    </div>
  );
}

function KeyBtn({
  children,
  size = "default",
  className,
}: {
  children: React.ReactNode;
  size?: "default" | "custom";
  className?: string;
}) {
  return (
    <KeyRoot>
      <div
        className={`flex h-10 flex-col p-1 text-[8px] ${
          size === "default" ? "w-10" : ""
        } ${className || "justify-center items-center"}`}
      >
        {children}
      </div>
    </KeyRoot>
  );
}

function EscapeBtn() {
  return <KeyBtn className="w-16 items-baseline justify-end">esc</KeyBtn>;
}

function MultiKey({
  children,
  primaryKey,
  secondaryKey,
  className = "",
}: {
  children?: React.ReactNode;
  primaryKey: React.ReactNode;
  secondaryKey?: React.ReactNode;
  className?: string;
}) {
  return (
    <KeyBtn className={`${className || "justify-around gap-0.5 items-center"}`}>
      {
        <div className="text-[7px] w-full flex justify-center">
          {secondaryKey ? secondaryKey : ""}{" "}
        </div>
      }
      <div className="w-full flex items-center justify-center">
        {children || primaryKey}
      </div>
    </KeyBtn>
  );
}

function FnKey({
  primaryKey,
  secondaryKey,
}: {
  primaryKey: React.ReactNode;
  secondaryKey?: React.ReactNode;
}) {
  return (
    <MultiKey
      className="justify-between items-center"
      primaryKey={primaryKey}
      secondaryKey={secondaryKey}
    />
  );
}

function DeleteKey() {
  return <KeyBtn className="w-16 items-end justify-end">delete</KeyBtn>;
}

function TabKey() {
  return <KeyBtn className="w-16 items-baseline justify-end">tab</KeyBtn>;
}

function CapsLockKey() {
  return <KeyBtn className="w-19 items-baseline justify-end">caps lock</KeyBtn>;
}

function ShiftKey() {
  return <KeyBtn className="w-24 items-baseline justify-end">shift</KeyBtn>;
}

function ReturnKey() {
  return <KeyBtn className="w-18 items-baseline justify-end">return</KeyBtn>;
}

function SpacebarKey() {
  return <KeyBtn className="w-[216px]">{null}</KeyBtn>;
}

function OptionKey() {
  return (
    <MultiKey
      className="items-end justify-around"
      primaryKey={<div className="text-center">option</div>}
      secondaryKey={
        <div className="flex justify-end w-full pr-1">
          <OptionIcon className="size-[7px]" />
        </div>
      }
    />
  );
}

function CommandKey() {
  return (
    <MultiKey
      className="w-13 items-center justify-around"
      primaryKey={<div className="text-center">command</div>}
      secondaryKey={
        <div className="flex justify-end w-full pr-1">
          <CommandIcon className="size-[7px]" />
        </div>
      }
    />
  );
}

function ArrowKeyGroup() {
  const Arrow = ({ className = "" }: { className: string }) => (
    <PlayIcon className={`size-[7px] fill-white ${className}`} />
  );

  function ArrowKey({
    direction,
  }: {
    direction: "left" | "right" | "up" | "down";
  }) {
    function selectDirectionClass(
      direction: "left" | "right" | "up" | "down"
    ): string {
      if (direction === "left") return "rotate-180";
      if (direction === "up") return "-rotate-90";
      if (direction === "down") return "rotate-90";
      return "";
    }

    const directionClass = selectDirectionClass(direction);

    return (
      <div className="text-[6px] w-10 flex h-full items-end justify-center">
        <KeyRoot className="w-full h-4 flex items-center justify-center !rounded-sm">
          {<Arrow className={directionClass} />}
        </KeyRoot>
      </div>
    );
  }

  return (
    <div className="flex items-end justify-between gap-1">
      <ArrowKey direction="left" />

      <div className="flex flex-col justify-around gap-0.5">
        <ArrowKey direction="up" />
        <ArrowKey direction="down" />
      </div>

      <ArrowKey direction="right" />
    </div>
  );
}

export function Keyboard() {
  return (
    <div className="keyboard-root m-4 flex flex-col gap-1 rounded-xl bg-white/15 p-2">
      {/* Row 1: F1, F2, F3 */}
      <div className="flex gap-1">
        <EscapeBtn />
        <FnKey primaryKey="F1" secondaryKey={<SunDimIcon size={"10"} />} />
        <FnKey primaryKey="F2" secondaryKey={<SunIcon size={"10"} />} />
        <FnKey primaryKey="F3" secondaryKey={<Table2Icon size={"10"} />} />
        <FnKey primaryKey="F4" secondaryKey={<SearchIcon size={"10"} />} />
        <FnKey primaryKey="F5" secondaryKey={<MicIcon size={"10"} />} />
        <FnKey primaryKey="F6" secondaryKey={<MoonIcon size={"10"} />} />
        <FnKey
          primaryKey="F7"
          secondaryKey={<FastForwardIcon className="rotate-180" size={"10"} />}
        />
        <FnKey primaryKey="F8" secondaryKey={<SkipForwardIcon size={"10"} />} />
        <FnKey primaryKey="F9" secondaryKey={<FastForwardIcon size={"10"} />} />
        <FnKey primaryKey="F10" secondaryKey={<VolumeXIcon size={"10"} />} />
        <FnKey primaryKey="F11" secondaryKey={<Volume1Icon size={"10"} />} />
        <FnKey primaryKey="F12" secondaryKey={<Volume2Icon size={"10"} />} />
        <KeyBtn>
          <div className="size-5 rounded-full bg-gradient-to-b from-neutral-900 form-20%  via-neutral-700 via-50% to-neutral-900 to-95% p-px">
            <div className="size-full rounded-full bg-black"></div>
          </div>
        </KeyBtn>
      </div>

      {/* Row 2: 1234 */}
      <div className="flex gap-1">
        <MultiKey primaryKey="`" secondaryKey="~" />

        {[
          { num: 1, specialChar: "!" },
          { num: 2, specialChar: "@" },
          { num: 3, specialChar: "#" },
          { num: 4, specialChar: "$" },
          { num: 5, specialChar: "%" },
          { num: 6, specialChar: "^" },
          { num: 7, specialChar: "&" },
          { num: 8, specialChar: "*" },
          { num: 9, specialChar: "(" },
          { num: 0, specialChar: ")" },
        ].map(({ num, specialChar }) => (
          <MultiKey
            key={`num-key-${num}`}
            primaryKey={num}
            secondaryKey={specialChar}
          />
        ))}

        <MultiKey
          primaryKey={"-"}
          secondaryKey={<span className="text-[10px]">_</span>}
        />
        <MultiKey
          primaryKey={"="}
          secondaryKey={<span className="text-[10px]">+</span>}
        />
        <DeleteKey />
      </div>

      {/* Row 3: QWERTY */}
      <div className="flex gap-1">
        <TabKey />

        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((alphabet) => (
          <KeyBtn key={`aplha-key-${alphabet}`}>{alphabet}</KeyBtn>
        ))}

        <MultiKey primaryKey={"["} secondaryKey={"{"} />
        <MultiKey primaryKey={"]"} secondaryKey={"}"} />
        <MultiKey primaryKey={"\\"} secondaryKey={"|"} />
      </div>

      {/* Row 4: ASD */}
      <div className="flex gap-1">
        <CapsLockKey />
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((alphabet) => (
          <KeyBtn key={`aplha-key-${alphabet}`}>{alphabet}</KeyBtn>
        ))}

        <MultiKey primaryKey={";"} secondaryKey={":"} />
        <MultiKey primaryKey={"'"} secondaryKey={'"'} />

        <ReturnKey />
      </div>

      {/* Row 5: Shift, ZXC */}
      <div className="flex gap-1">
        <ShiftKey />
        {["Z", "X", "C", "V", "B", "N", "M"].map((alphabet) => (
          <KeyBtn key={`aplha-key-${alphabet}`}>{alphabet}</KeyBtn>
        ))}

        <MultiKey primaryKey={","} secondaryKey={"<"} />
        <MultiKey primaryKey={"."} secondaryKey={">"} />
        <MultiKey primaryKey={"/"} secondaryKey={"?"} />

        <ShiftKey />
      </div>

      {/* Row 6: Spacebar */}
      <div className="flex gap-1">
        <MultiKey
          primaryKey={
            <div className="w-full">
            <GlobeIcon className="size-[9px]" />
            </div>
          }
          secondaryKey={
            <div className="flex w-full items-center justify-end pr-1">fn</div>
          }
        />
        <MultiKey
          primaryKey={<div className="text-center">control</div>}
          secondaryKey={
            <div className="flex w-full items-center justify-end pr-1">
             <ChevronUpIcon className="size-[9px]" />
            </div>
          }
        />
        <OptionKey />
        <CommandKey />
        <SpacebarKey />
        <CommandKey />
        <OptionKey />

        <ArrowKeyGroup />
      </div>
    </div>
  );
}
