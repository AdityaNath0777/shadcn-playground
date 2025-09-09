import {
  ChevronUpIcon,
  CommandIcon,
  EqualIcon,
  FastForwardIcon,
  GlobeIcon,
  MicIcon,
  MinusIcon,
  MoonIcon,
  OptionIcon,
  PlayIcon,
  PlusIcon,
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
import { KEY_SIZES, NUM_KEYS } from "./constants";

/**
 * Keyboard
 */
const KEYBOARD_NAME = "Keyboard 2";

function Keyboard2({
  ref,
  className = "",
  ...props
}: {
  ref?: React.Ref<HTMLDivElement> | undefined;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={`keyboard-root m-4 flex flex-col gap-1 rounded-xl bg-gradient-to-b from-white/15 to-black/20  p-2 shadow-lg ${className}`}
      {...props}
    >
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

        {NUM_KEYS.map(({ num, symbol }) => (
          <MultiKey
            key={`num-key-${num}`}
            primaryKey={num}
            secondaryKey={symbol}
          />
        ))}

        <MultiKey
          primaryKey={<MinusIcon size={10} />}
          secondaryKey={<MinusIcon size={15} />}
        />
        <MultiKey
          primaryKey={<EqualIcon size={10} />}
          secondaryKey={<PlusIcon size={10} />}
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

Keyboard2.displayName = KEYBOARD_NAME;

/**
 * KeyRoot
 */
function KeyRoot({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`key-btn rounded-lg bg-black shadow-md ring-1 shadow-gray-100/50 ring-gray-50/20 transition-all duration-[70] hover:scale-90 hover:shadow-transparent ${className}`}
    >
      {children}
    </div>
  );
}

KeyRoot.displayeName = "Key Root";

/**
 * KeyBtn
 */
function KeyBtn({
  children,
  size = "default",
  className,
}: {
  children: React.ReactNode;
  size?: keyof typeof KEY_SIZES;
  className?: string;
}) {
  return (
    <KeyRoot>
      <div
        className={`flex h-10 flex-col p-1 text-[8px] ${
          size !== "default" ? KEY_SIZES[size] : KEY_SIZES.default
        } ${className || "justify-center items-center"}`}
      >
        {children}
      </div>
    </KeyRoot>
  );
}

KeyBtn.displayName = "Key Button";

/**
 * Multi Key
 */
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
          {secondaryKey || ""}
        </div>
      }
      <div className="w-full flex items-center justify-center">
        {children || primaryKey}
      </div>
    </KeyBtn>
  );
}

MultiKey.displayName = "Multi Key";

/**
 * Special Key
 */
function SpecialKey({
  label,
  size,
}: {
  label: string;
  size: keyof typeof KEY_SIZES;
}) {
  return (
    <KeyBtn size={size} className="items-baseline justify-end mb-1 ml-1">
      {label}
    </KeyBtn>
  );
}

SpecialKey.displayName = "Special Key";

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

FnKey.displayName = "Function Key";

const Arrow = ({ className = "" }: { className?: string }) => (
  <PlayIcon className={`size-[7px] fill-white ${className}`} />
);

/**
 *
 * Arrow Key
 */
function ArrowKey({
  direction,
}: {
  direction: "left" | "right" | "up" | "down";
}) {
  function selectDirectionClass(dir: "left" | "right" | "up" | "down"): string {
    if (dir === "left") return "rotate-180";
    if (dir === "up") return "-rotate-90";
    if (dir === "down") return "rotate-90";
    return "";
  }
  return (
    <div className="text-[6px] w-10 flex h-full items-end justify-center">
      <KeyRoot className="w-full h-4 flex items-center justify-center !rounded-sm">
        <Arrow className={selectDirectionClass(direction)} />
      </KeyRoot>
    </div>
  );
}

ArrowKey.displayName = "Arrow Key";

/**
 * Arrow Key Group
 */
function ArrowKeyGroup() {
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

ArrowKeyGroup.displayName = "Arrow Key Group";

const EscapeBtn = () => <SpecialKey label="esc" size="tab" />;
const DeleteKey = () => <SpecialKey label="delete" size="tab" />;
const TabKey = () => <SpecialKey label="tab" size="tab" />;
const CapsLockKey = () => <SpecialKey label="caps lock" size="capsLock" />;
const ShiftKey = () => <SpecialKey label="shift" size="shift" />;
const ReturnKey = () => <SpecialKey label="return" size="return" />;

const SpacebarKey = () => (
  <KeyBtn size="spacebar" className="relative">
    <div className="absolute inset-x-0 top-0 h-[2px] bg-white/10 rounded-t-sm"></div>
  </KeyBtn>
);

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
      className={`${KEY_SIZES.command} items-center justify-around`}
      primaryKey={<div className="text-center">command</div>}
      secondaryKey={
        <div className="flex justify-end w-full pr-1">
          <CommandIcon className="size-[7px]" />
        </div>
      }
    />
  );
}

export {
  Keyboard2,
  KeyRoot,
  KeyBtn,
  MultiKey,
  SpecialKey,
  FnKey,
  ArrowKeyGroup,
  ArrowKey,
};
