<!-- # Chai aur ShadCN

This a repo serves as my playground a dnotes that I made while following ShadCN crash course on YT from hitesh choudhory Chai aur code.

- install next js

```shell
npx create-next-app@latest
```

selected configurations as per my perference such as TS, app router, etc.

- install and initialize shad cn

```shell
npx shadcn@latest init
```

This will setup the basic configurations to build our component library. It also sets some root, theme and other configurations in the main css file (in next.js it is globals.css file)

- install the button component

```shell
npx shadcn@latest add button
```

Shadcn will install only the basic dependencies such as @radix-ui/slot, etc. as per the component's requirement.
Though it installs the complete package of lucide-react as it comes as only one simgle package

- Now use this Button Component
  it has variants: default, secondary, outline, ghost, destrcutive
  secondary and default is based on the root css variable,
  the ghost buttons inherently has transparent bg but becomes visible when the mouse hovers over it
  outline has a ring (border) on it -->

# Chai aur ShadCN ☕

This repository is my personal playground and notes from following the **ShadCN crash course** on YouTube by **Hitesh Choudhary (Chai aur Code)**.

It documents how I set up and practiced with **ShadCN UI** using **Next.js**.

---

## Setup Instructions

### 1. Create a New Next.js App

```bash
npx create-next-app@latest
```

> Select your preferred settings — I used **TypeScript**, **App Router**, and **Tailwind CSS**.

---

### 2. Install and Initialize ShadCN

```bash
npx shadcn@latest init
```

This sets up:

- Base configurations for the ShadCN component system
- Theme and root design tokens (in `globals.css`)
- Directory structure for customizable UI components

---

### 3. Add the Button Component

```bash
npx shadcn@latest add button
```

Notes:

- Installs only the required dependencies like `@radix-ui/react-slot`
- The `lucide-react` icon package is added fully as it's bundled as a single module

---

### Using the Button Component

The `<Button />` component supports several variants:

| Variant       | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `default`     | Primary style — based on root theme variables                 |
| `secondary`   | Alternate button style — also theme-based                     |
| `outline`     | Transparent background with visible border ring               |
| `ghost`       | No background by default; visible only on hover               |
| `destructive` | Used for dangerous actions (e.g., delete); styled accordingly |

All styles are controlled via Tailwind classes and root CSS variables defined in the theme.

---

### 4. Add Accordion Component

```bash
npx shadcn@latest add accordion
```

This installs the `Accordion`, `AccordionItem`, `AccordionTrigger`, and `AccordionContent` components from ShadCN (built on Radix UI).

---

### Usage Modes

The `Accordion` component supports two types:

---

### 🔹 `type="single"`

> Only **one item** can remain open at a time.

- `collapsible: true`

  - All items will be collapsed, excluding the currently open one.
  - Accordion can have **no item open** at all unlike `collapsible: true`

- `collapsible: false`

  - One item **must always remain open**.
  - If you try to close the open item, it will stay open unless another item is opened (which auto-closes the previous one).

---

### 🔸 `type="multiple"`

> **Multiple items** can stay open at the same time.

- Works based on each `AccordionItem` having a **unique `value` prop**.
- If multiple items have the **same value**, they will **open/close simultaneously** (which is usually unintended).
- To avoid conflicts, we need to ensure each `AccordionItem` uses a unique value, like:

```tsx
<AccordionItem value={`faq-${index}`}>
```

## 5. Dropdown Menu

### Install DropdownMenu

```bash
npx shadcn@latest add dropdown-menu
```

### Usage

```tsx
function ModeToggle() {
  return (
    <DropdownMenu>
      <DropdownTrigger />
      <DropdownContent />
    </DropdownMenu>
  );
}
```

Then In content we will add the items to display inside this menu

```tsx
function ModeToggle() {
  return (
    <DropdownMenu>
      <DropdownTrigger />
      <DropdownContent>
        <DropdownItem onClick={handleClick} />
        <DropdownItem onClick={handleClick} />
        <DropdownItem onClick={handleClick} />
      </DropdownContent>
    </DropdownMenu>
  );
}
```

## 6. Theming in Next.js

### Install next-themes

```bash
npm install next-themes
```

### Create a Theme Provider

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### Wrap Root Layout with it

```tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
```

### Add Mode Toggle

#### Install DropdownMenu and button for Theme toggler

```bash
npx shadcn@latest add dropdown-menu
```

- I already have button

### Make sure to suppress hydration warning

### Dropdown Menu to select the theme (light, dark or system)

```tsx
function ModeToggle() {
  const { setTheme } = useTheme(); // from next/themes

  return (
    <DropdownMenu>
      <DropdownTrigger />
      <DropdownContent>
        <DropdownItem onClick={handleClick} />
        <DropdownItem onClick={handleClick} />
        <DropdownItem onClick={handleClick} />
      </DropdownContent>
    </DropdownMenu>
  );
}
```

## 7. Dialog

Install it using

```bash
npx shadcn@latest add dialog
```

```jsx
<Dialog>
  <DialogTrigger />
  <DialogContent />
</Dialog>
```

```jsx
<Dialog>
  <DialogTrigger />
  <DialogContent>
    <DialogHeader />
    <DialogFooter />
  </DialogContent>
</Dialog>
```

```jsx
<Dialog>
  <DialogTrigger />
  <DialogContent>
    <DialogHeader>
      <DialogTitle />
      <DialogDescription />
    </DialogHeader>
    <DialogFooter />
  </DialogContent>
</Dialog>
```

- To use the Dialog component from within a Context Menu or Dropdown Menu, you must encase the Context Menu or Dropdown Menu component in the Dialog component.

## 8. Search Bar

> I have implemented in two way

- using Input and Button components
- using Command and Dialog components

## 9. Keyboard

My own custom Keyboard component, this one is juts for UI based on the keyboard from Aceternity's landing page [link](ui.aceternity.com)
