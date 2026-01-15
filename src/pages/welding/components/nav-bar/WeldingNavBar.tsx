import TabButton from "./TabButton";

export default function WeldingNavBar() {
    return <aside className="w-full h-14 bg-white flex items-center">
        <TabButton url="/welding/iso3834" title="ISO3834" />
        <TabButton url="/welding/en15085" title="EN15085-2" />
        <TabButton url="/welding/en1090" title="EN1090" />
        <TabButton url="/welding/wps" title="용접사/WPS" />
    </aside>
}