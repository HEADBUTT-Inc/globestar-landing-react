import Breadcrumb from "../../../components/Breadcrumb";
import introduce from "../../../../public/images/introduce/introduce.png";
import IntroduceNavBar from "../components/nav-bar/IntroduceNavBar";

export default function IntroduceMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            {/* breadcrumb 그대로 */}
            <Breadcrumb first="HOME" second="회사소개" third="회사소개" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                회사소개
            </h1>
            <IntroduceNavBar />
            {/* 섹션 타이틀 */}
            <p className="text-lg text-primary">
                ・ 회사소개
            </p>
            <img
                src={introduce}
                className="w-full rounded"
            />

            <div className="flex flex-col gap-4 text-label text-sm">
                <p>
                    글로브스타는 싱가포르를 기반으로
                    유럽, 중동, 동남아, 아프리카 등 전세계 철도분야에서
                    30년이상 시스템 보증과 시스템 엔지니어링(SE) 등을
                    수행하고 있습니다.
                </p>

                <p>
                    한국에는 2010년 1월, 신분당선 프로젝트에서
                    시스템보증, 시스템통합, T&C 및 RAMS 서비스를 시작으로
                    철도기술 컨설팅 및 인증업무를 수행하고 있습니다.
                </p>

                <p>
                    알스톰트랜스포트, CAF 등 유럽 철도기업의 협력업체로서,
                    리나 (RINA Services), 티유브이노드 (TUV Nord), DNV,
                    KR (한국선급) 등 인증기관과 함께
                    유럽인증기관 출신 전문가들은
                    고객사의 인증을 원스톱 서비스로 해결해 드립니다.
                </p>

                <p>
                    무료 세미나 신청으로 기술력을 확인하십시오.
                </p>

                <p className="font-medium">
                    글로브스타 전문가 일동
                </p>
            </div>
        </div>
    );
}