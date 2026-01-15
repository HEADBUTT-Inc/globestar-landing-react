import TabButton from "./TabButton";

export default function TechNavBar() {
    return <aside className="w-full h-14 bg-white flex items-center">
        <TabButton url="/tech" title="RAMS" end={true} />
        <TabButton url="/tech/isa-sil" title="ISA/SIL인증" />
        <TabButton url="/tech/safety-act" title="철도안전법승인" />
        <TabButton url="/tech/se" title="SE" />
        <TabButton url="/tech/iris" title="ISO/TS22163(IRIS)" />
        <TabButton url="/tech/tsi" title="TSI" />
    </aside>
}