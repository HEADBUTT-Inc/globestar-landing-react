interface Props {
    title: string;
}

export default function PageTitle({ title }: Props) {
    return <h1 className="text-label text-4xl font-black border-b-2 border-primary pb-4">
        {title}
    </h1>
}