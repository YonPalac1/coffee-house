import Line from "./commons/Line";

export default function MenuOptions({name, price, content}) {
    return <div className="flex justify-center items-center text-white pb-5 gap-5">
        <div className="text-gray-300 leading-4 text-left">
            <h4 className="font-bold text-1xl">{name}</h4>
            <span className="w-full">{content}</span>
        </div>
        <Line w="100%" />
        <span className="text-orange-400 text-2xl">${price}</span>
    </div>
}