import { Outlet } from "react-router"

import { Navbar } from "@/components/layout/Navbar"

export function RootLayout() {
    return (
        <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        </>
    )
}