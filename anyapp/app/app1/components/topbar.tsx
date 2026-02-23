"use client"

import { useState } from "react";
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, Button, Drawer, DrawerContent } from "@heroui/react";
import { FolderOpen, Menu, X } from "lucide-react";

export function TopVar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFolderOpen, setIsFolderOpen] = useState(false);

    return (
        <Navbar
            isBordered
            isBlurred={false}
            height="42px"
            maxWidth="full"
            classNames={{
                base: "bg-gray-200 px-0",
                wrapper: "px-2",
            }}
            isMenuOpen={isOpen}
            onMenuOpenChange={setIsOpen}
        >
            <NavbarContent>
                <Button onPress={() => setIsFolderOpen(true)}>
                    <FolderOpen size={30} color="#EAB308" />
                    TOP
                </Button>
            </NavbarContent>

            <NavbarContent justify="end">
                <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
            </NavbarContent>


            <Drawer
                isOpen={isFolderOpen}
                onOpenChange={setIsFolderOpen}
                placement="left"
            >
                <DrawerContent>
                    <div className="w-1/2 p-4">
                        仮コンテンツ
                    </div>
                </DrawerContent>
            </Drawer>

            <NavbarMenu
                className="top-[74px] right-0 left-auto w-32 bg-gray-200 h-auto max-h-fit"
            >
                <NavbarMenuItem>Home</NavbarMenuItem>
                <NavbarMenuItem>About</NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
