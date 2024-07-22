import Button from "./commons/Button"
import Line from "./commons/Line"

export default function Header() {
    return <header className="text-center text-white">
        <h1 className="text-6xl lg:text-9xl pt-24">Coffee House</h1>
        <div className="subtitle uppercase text-xl">
            <Line w="50px" />
            <span>siente el aroma</span>
            <Line w="50px" />
        </div>
        <Button />
    </header>
}