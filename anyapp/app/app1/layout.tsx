import { TopVar } from "./components/topbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <TopVar />
            {children}
        </div>
    );
}
