import { useDeviceStore } from "../../../../store/useDeviceStore";
import { cn } from "../../../../utils/cn";


interface Client {
    ci: string;
    clientName: string;
}

interface Props {
    clients: Client[];
}

export default function ClientGridRow({ clients }: Props) {
    const device = useDeviceStore((s) => s.deviceType);

    const isLaptop = device === "laptop";
    const isTablet = device === "tablet";

    // PC / Laptop: 4열, Tablet: 2열
    const MAX_SIZE = isTablet ? 2 : 4;
    const EMPTY_SIZE = MAX_SIZE - clients.length;

    return (
        <div className={cn(
            "w-full flex gap-4 justify-center",
            isTablet && "flex-wrap"
        )}>
            {clients.map((client, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex flex-col gap-1 items-center",
                        isTablet ? "w-[40%]" : "flex-1"
                    )}
                >
                    <img
                        src={client.ci}
                        className={cn(
                            // PC 기본
                            "w-[70%] h-16 object-fill",

                            // Laptop
                            isLaptop && "h-12",

                            // Tablet
                            isTablet && "h-8"
                        )}
                    />
                    <p className={cn(
                        "h-4",
                        isLaptop && "text-sm",
                        isTablet && "text-xs"
                    )}>
                        {client.clientName}
                    </p>
                </div>
            ))}

            {/* 빈칸 채우기 (PC/Laptop만 의미 있음) */}
            {!isTablet &&
                Array.from({ length: EMPTY_SIZE }, (_, i) => (
                    <div key={i} className="flex flex-1 h-20" />
                ))}
        </div>
    );
}