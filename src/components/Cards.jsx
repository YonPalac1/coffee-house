
export default function Cards({ title, img, time, text }) {
    return <div className="border border-gray-300 text-center text-white bg-gray-900 pt-12 pb-12 capitalize">
        <div className="m-auto mb-12">
            <img className="w-[50px] m-auto" src={img} alt={title} />
        </div>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="uppercase text-sm">{text}</p>
        <div className="pt-5">
            <a href="" className="text-orange-400 flex justify-center items-center">
            <svg width="10"  height="10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated mr-3 mb-[-3px]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>
            descubre mas
            <svg width="10"  height="10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated ml-3 mb-[-3px]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>

            </a>
        </div>
    </div>
}