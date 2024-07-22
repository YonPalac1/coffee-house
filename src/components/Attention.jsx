import Button from "./commons/Button";

export default function Attention({img, title, span}) {
    return <div className={`text-white text-center relative p-24 ${img}`}>
    <h2 className="text-6xl tangerine">{title}</h2>
    <p className="text-2xl">{span}</p>
    <Button />
</div>
}