import background from "../../public/images/background.png";

export default function Background() {
    return <img
        src={background}
        className="w-full h-full absolute object-cover"
    />
}