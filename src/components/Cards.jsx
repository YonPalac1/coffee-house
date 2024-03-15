import { motion } from "framer-motion"

export default function Cards({ title, img, time }) {
    return <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: time }} 
            className="border border-gray-300 text-center text-white bg-gray-900 pt-12 pb-12">
        <div className="m-auto mb-12">
            <img className="w-[50px] m-auto" src={img} alt={title} />
        </div>
        <h4 className="font-bold text-xl capitalize">{title}</h4>
        <p>For each dish the growth of wevery element & the selection</p>
        <div className="pt-5">
            <a href="" className="text-orange-400 flex justify-center items-center">
            <svg width="10"  height="10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated mr-3 mb-[-3px]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>
            Discover more
            <svg width="10"  height="10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated ml-3 mb-[-3px]"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>

            </a>
        </div>
    </motion.div>
}