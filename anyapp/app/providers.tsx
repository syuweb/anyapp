'use client'

import { FC, ReactNode } from "react"
import { HeroUIProvider } from "@heroui/react";

type Props = {
    children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    );
};
