"use client"

import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@heroui/react";

const menuItems = [
  "app1",
  "app2",
  "app3",
];

export function TopVar() {
  return (
    <Navbar isBlurred={false} height="32px">
      <NavbarMenuToggle />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}