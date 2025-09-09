export const KEY_SIZES = {
  default: "w-10",
  tab: "w-16",
  capsLock: "w-19",
  shift: "w-24",
  return: "w-18",
  spacebar: "w-[216px]",
  command: "w-13",
} as const;

export const NUM_KEYS: Array<{ num: number; symbol: string }> = [
  { num: 1, symbol: "!" },
  { num: 2, symbol: "@" },
  { num: 3, symbol: "#" },
  { num: 4, symbol: "$" },
  { num: 5, symbol: "%" },
  { num: 6, symbol: "^" },
  { num: 7, symbol: "&" },
  { num: 8, symbol: "*" },
  { num: 9, symbol: "(" },
  { num: 0, symbol: ")" },
] as const;
