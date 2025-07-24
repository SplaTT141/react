import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

export function PublicTemplate() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}