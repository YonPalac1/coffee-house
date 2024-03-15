import { motion } from "framer-motion"
import Button from "./commons/Button"
import Line from "./commons/Line"

export default function Header() {
    return <header className="text-center text-white">
        <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-6xl lg:text-9xl pt-24">Coffee House</motion.h1>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="subtitle uppercase text-xl">
            <Line w="50px" />
            <span>siente el aroma</span>
            <Line w="50px" />
        </motion.div>
        <Button />
    </header>
}