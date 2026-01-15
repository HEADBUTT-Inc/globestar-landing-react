import TabButton from "./TabButton";

export default function IntroduceNavBar() {
    return <aside className="w-full h-14 bg-white flex items-center">
        <TabButton url="/introduce" title="회사소개" end={true} />
        <TabButton url="/introduce/clients" title="고객사 리스트" />
        <TabButton url="/introduce/map" title="오시는 길" />
    </aside>
}