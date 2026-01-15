import { Outlet } from "react-router-dom";
import TopBar from "../components/top-bar/TopBar";
import NavBar from "../components/nav-bar/NavBar";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <TopBar />
            <NavBar />
            {/* Main */}
            <main className="w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
