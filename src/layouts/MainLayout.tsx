import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            {/* Main */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}
