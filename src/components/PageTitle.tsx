import { useDeviceStore } from "../store/useDeviceStore";
import { cn } from "../utils/cn";


interface Props {
    title: string;
}

export default function PageTitle({ title }: Props) {
    const isLaptop = useDeviceStore((s) => s.deviceType === "laptop");

    return (
        <h1 className={cn(
            "text-label text-4xl font-black border-b-2 border-primary pb-4",
            isLaptop && "text-3xl"
        )}>
            {title}
        </h1>
    );
}