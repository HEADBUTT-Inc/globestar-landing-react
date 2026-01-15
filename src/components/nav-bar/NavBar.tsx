import TabButton from "./TabButton";

export default function NavBar() {
    return <aside className="w-full h-14 bg-primary flex items-center">
        <TabButton url="/introduce" title="회사소개" />
        <div className="w-px h-6 bg-white" />
        <TabButton url="/tech" title="철도기술" />
        <div className="w-px h-6 bg-white" />
        <TabButton url="/welding" title="용접인증" />
        <div className="w-px h-6 bg-white" />
        <TabButton url="/consulting" title="기술컨설팅" />
    </aside>
}