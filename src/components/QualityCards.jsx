import { motion } from "framer-motion"

export default function QualityCards({img, title, p}) {
    return <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className="flex items-center mt-7">
        <div className="bg-orange-400 rounded-[100%] p-3 text-orange-400">
            <img className="w-[50px]" src={img} alt={title} />
        </div>
        <div className="pl-6 pr-6 mb-5 lg:pl-5 lg:pr-5">
            <h5 className="font-bold text-xl">{title}</h5>
            <p>{p}</p>
        </div>
    </motion.div>
} 