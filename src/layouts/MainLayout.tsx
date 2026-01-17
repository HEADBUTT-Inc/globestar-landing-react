import { Outlet } from "react-router-dom";
import TopBar from "../components/top-bar/TopBar";
import NavBar from "../components/nav-bar/NavBar";
import Footer from "../components/Footer";
import { useDeviceStore } from "../store/useDeviceStore";
import { useEffect } from "react";

export default function MainLayout() {

    const BREAKPOINTS = {
        TABLET: 768,        // tablet portrait 이하
        LAPTOP: 1280,       // 소형 PC / 노트북
    };

    const setDeviceType = useDeviceStore((s) => s.setDeviceType);

    useEffect(() => {
        const updateDevice = () => {
            const w = window.innerWidth;

            if (w < BREAKPOINTS.TABLET) {
                setDeviceType("tablet");
            } else if (w < BREAKPOINTS.LAPTOP) {
                setDeviceType("laptop");
            } else {
                setDeviceType("pc");
            }
        };

        updateDevice();
        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateDevice);
    }, [setDeviceType]);

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
