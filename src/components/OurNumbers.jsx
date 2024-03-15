export default function OurNumbers({number, name}) {
    return <div className="text-white">
        <p className="text-3xl text-orange-400">{number}+</p>
        <span className="tangerine text-2xl md:text-3xl lg:text-4xl capitalize">{name}</span>
    </div>
} 