import maintenanceImg from "../../public/images/maintenance.jpeg";

export default function Maintenance() {
    return (
        <main className="w-screen h-screen flex items-center justify-center bg-black">
            <img
                src={maintenanceImg}
                alt="홈페이지 공사중 안내"
                className="h-full object-contain"
            />
        </main>
    );
}