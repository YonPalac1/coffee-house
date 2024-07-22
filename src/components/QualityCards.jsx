export default function QualityCards({img, title, p}) {
    return <div className="flex items-center mt-7">
        <div className="bg-orange-400 rounded-[100%] p-3 text-orange-400 container-icon-quality">
            <img className="icon-quality" src={img} alt={title} />
        </div>
        <div className="pl-6 pr-6 mb-5 lg:pl-5 lg:pr-5">
            <h5 className="font-bold text-xl">{title}</h5>
            <p>{p}</p>
        </div>
    </div>
} 