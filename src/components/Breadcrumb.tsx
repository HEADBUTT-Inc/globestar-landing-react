interface Props {
    first: string;
    second: string;
    third?: string;
}

export default function Breadcrumb({ first, second, third }: Props) {
    return <div className="flex text-label-light gap-2 text-sm">
        <p>
            {first} {">"} <span className={third ? "" : "text-primary"}>{second}</span> {third && ">"} <span className="text-primary">{third}</span>
        </p>
    </div>
}