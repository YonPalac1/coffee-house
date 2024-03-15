import { motion } from "framer-motion"
import Line from "./commons/Line";

export default function MenuOptions({name, price, content}) {
    return <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className="flex justify-center items-center text-white pb-5 gap-5">
        <div className="text-gray-300 leading-4 text-left">
            <h4 className="font-bold text-1xl">{name}</h4>
            <span className="w-full">{content}</span>
        </div>
        <Line w="100%" />
        <span className="text-orange-400 text-2xl">${price}</span>
    </motion.div>
}