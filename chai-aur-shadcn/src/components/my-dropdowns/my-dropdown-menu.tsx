import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MyDropdownMenu({
  title,
  label,
  items,
}: {
  title: string;
  label: string;
  items: string[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{title || "Open"}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{label || "My Account"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.length > 0 &&
          items.map((item, idx) => (
            <DropdownMenuItem key={`item-${idx}`}>{item}</DropdownMenuItem>
          ))}
        {/* <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
