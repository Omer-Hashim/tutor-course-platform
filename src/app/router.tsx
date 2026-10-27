import { createBrowserRouter } from "react-router"

import { RootLayout } from "@/components/layout/RootLayout"
import { PlaceholderPage } from "@/pages/PlaceholderPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
        { index: true, element: <PlaceholderPage title="Home" /> },
        { path: "courses", element: <PlaceholderPage title="Courses" /> },
        { path: "courses/:id", element: <PlaceholderPage title="Course" /> },
        { path: "about", element: <PlaceholderPage title="About" /> },
        { path: "contact", element: <PlaceholderPage title="Contact" /> },
        { path: "*", element: <PlaceholderPage title="Not found" /> },
        ],
    },
])