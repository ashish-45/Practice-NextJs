export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <p className="text-pink-400">child Layout</p>
            {children}
        </>
    );
}
