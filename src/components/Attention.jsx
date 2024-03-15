import { motion } from "framer-motion"
import Button from "./commons/Button";

export default function Attention({img, title, span}) {
    return <div className={`text-white text-center relative p-24 ${img}`}>
    <motion.h2 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} 
        className="text-6xl tangerine">{title}</motion.h2>
    <motion.p 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} 
        className="text-2xl">{span}</motion.p>
    <Button />
</div>
}