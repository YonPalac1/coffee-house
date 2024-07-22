import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import QualityCards from "./components/QualityCards";
import Button from "./components/commons/Button";
import Line from "./components/commons/Line";
import MenuOptions from "./components/MenuOptions";
import OurNumbers from "./components/OurNumbers";
import Attention from "./components/Attention";
import Slider from "./components/Slider";

import banner from "./utils/image/banner.webp"
import mancha from "./utils/image/mancha.png"
import icon from "./utils/image/icon2.webp"
import coffee1 from "./utils/image/coffee-1.webp"

import { Images, Quality, Icons, Menu } from "./constants";

export default function App() {

    return <div className="bg-gray-900">
        <Navbar />
        <Header />
        <section
            className="grid mt-[-15px] pl-5 pr-5 md:grid-cols-3 lg:pl-56 lg:pr-56 gap-4 z-10">
            <Cards title="gran americano" img={Icons[0]} time="1" text="Un clásico con aroma intenso y sabor equilibrado" />
            <Cards title="latte delicioso" img={Icons[1]} time="2" text="De textura cremosa y sabor suave para disfrutar todo el dia" />
            <Cards title="el mejor mocha" img={Icons[2]} time="3" text="un placer dulce y reconfortante para los amantes del cafe y el chocolate" />
        </section>
        <section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-24 p-5 md:p-2 md:grid-cols-3 lg:mt-16 lg:pl-56 lg:pr-56 lg:flex text-white">
            <div className="flex flex-wrap flex-col content-between">
                <span
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-orange-300 tangerine text-3xl">algunos beneficios</span>
                <h4
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl capitalize">solo granos de la mejor calidad</h4>
                <div className="relative mt-5 text-orange-300 flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>
                    <Line w={"100px"} className="absolute" />
                </div>
                <div className="">
                    {
                        Quality.map((item, i) => {
                            return <QualityCards key={i} title={item.title} p={item.p} img={item.icon} />
                        })
                    }
                </div>
            </div>
            <div className="mt-5 relative flex justify-center items-center lg:mt-0">
                <div className="w-max-[700px]">
                    <img src={banner} alt="coffee moments, every ten coffee is free" />
                </div>
                <div className="absolute text-white text-center z-10">
                    <h3 className="text-6xl capitalize">momentos café</h3>
                    <span className="capitalize block text-2xl font-extralight">Por cada tres cafés uno es gratis</span>
                    <Button />
                </div>
                <div className="absolute blow">
                    <img src={mancha} alt="manccha de cafe" />
                </div>
            </div>
        </section>

        <section className="grid grid-cols-3 mt-24 lg:grid-cols-6 ">
            {
                Images.map((item, i) => {
                    return <div className="relative text-center text-white">
                        <img src={item.img} className="z-[1] w-full h-full hover:brightness-50" alt="coffee" key={i} />
                        <div className="coffeeDay absolute w-full z-[5] h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 hover:bg-gray-900/50">
                            <p className="text-2xl raleway">{item.text}</p>
                            <span className="tangerine text-orange-400 text-2xl">{item.sub}</span>
                        </div>
                    </div>
                })
            }
        </section>
        <section className="bg-coffee-left bg-black relative p-12 text-white md:flex justify-around">
            <div>
                <h4 className="capitalize text-3xl md:text-4xl">Compra uno toma dos! <span className="text-orange-300">Solo este finde!</span></h4>
                <span>Disfruta dos cafés, dos croissants o dos de tus bebidas favoritas al precio de uno</span>
            </div>
            <Button />
        </section>

        <section className="text-center mt-24 p-5 md:pl-12 md:pr-12 lg:pl-56 lg:pr-56">
            <span className="text-orange-400 capitalize">Nuestro menu</span>
            <h4 className="capitalize text-3xl md:text-5xl mt-3 text-white">Elige tu café perfecto</h4>
            <div className="text-orange-400 flex justify-center items-center mt-5">
                <Line w={"50px"} />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>
                <Line w={"50px"} />
            </div>
            <div className="pt-12 grid md:grid-cols-2">
                <div className="relative h-full flex items-center">
                    <img src={coffee1} alt="" className="h-full" />
                    <img src={icon} className="w-[150px] absolute quality-icon" alt="" />
                </div>
                <div className="p-12 bg-black capitalize">
                    {
                        Menu.map((items, i) => {
                            return <MenuOptions key={i} name={items.name} price={items.price} content={items.content} />
                        })
                    }
                </div>
            </div>
        </section>

        <section className="pl-5 pr-5 mt-12 grid grid-cols-4 text-center md:pl-12 md:pr-12 lg:pr-56 lg:pl-56">
            <OurNumbers number="200" name="clientes cada dia" />
            <OurNumbers number="180" name="dias de grandes momentos" />
            <OurNumbers number="350" name="tazas de cafe diariamente" />
            <OurNumbers number="20" name="tipos de café" />
        </section>

        <section className="comments text-center text-white pt-24 pb-24 mt-24 pl-5 pr-5 md:pl-12 md:pr-12 lg:pr-56 lg:pl-56">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-quote text-orange-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" /><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" /></svg>
            <p
                className="tangerine text-3xl">Entré buscando un café para despertarme pero encontré mucho màs. El aroma del café me envolvio al instante y la decoración me hizo sentir como en casa.</p>
            <h4
                className="text-2xl mt-5">Lucia</h4>
            <span
                className="text-orange-400 text-5xl tangerine">clientes del restaurante</span>
        </section>

        <section
            className="text-center mt-24 p-5 md:pl-12 md:pr-12 lg:pl-56 lg:pr-56">
            <span className="text-orange-400 capitalize">nuestro blog</span>
            <h4 className="capitalize text-3xl md:text-5xl mt-3 text-white">sé el primero en leernos</h4>
            <div className="text-orange-400 flex justify-center items-center mt-5">
                <Line w={"50px"} />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-square-rotated"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" /></svg>
                <Line w={"50px"} />
            </div>
            <Slider />
        </section>

        <section className="grid mt-12 md:grid-cols-2">
            <Attention title="Horarios" span="lun-vie: 9.00 am" img="bg1" />
            <Attention title="Quieres una reserva?" span="+1139366942" img="bg2" />
        </section>

        <footer className="bg-black grid md:grid-cols-3 pt-24 pb-24 p-5 text-white md:pl-12 md:pr-12 lg:pl-56 lg:pr-56">
            <div
                className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-5">Contactanos</h4>
                <p className="flex gap-2 mb-2 justify-center md:justify-start"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google-maps text-orange-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M6.428 12.494l7.314 -9.252" /><path d="M10.002 7.935l-2.937 -2.545" /><path d="M17.693 6.593l-8.336 9.979" /><path d="M17.591 6.376c.472 .907 .715 1.914 .709 2.935a7.263 7.263 0 0 1 -.72 3.18a19.085 19.085 0 0 1 -2.089 3c-.784 .933 -1.49 1.93 -2.11 2.98c-.314 .62 -.568 1.27 -.757 1.938c-.121 .36 -.277 .591 -.622 .591c-.315 0 -.463 -.136 -.626 -.593a10.595 10.595 0 0 0 -.779 -1.978a18.18 18.18 0 0 0 -1.423 -2.091c-.877 -1.184 -2.179 -2.535 -2.853 -4.071a7.077 7.077 0 0 1 -.621 -2.967a6.226 6.226 0 0 1 1.476 -4.055a6.25 6.25 0 0 1 4.811 -2.245a6.462 6.462 0 0 1 1.918 .284a6.255 6.255 0 0 1 3.686 3.092z" /></svg>
                    Av. santa Fe 1234, Buenos Aires</p>
                <p className="flex gap-2 mb-2 justify-center md:justify-start"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone text-orange-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                    +11 3936 6942</p>
                <p className="flex gap-2 mb-2 justify-center md:justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-at text-orange-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" /></svg>
                    coffee_house@coffeehouse.com</p>
            </div>

            <div className="text-center mt-12 md:mt-0">
                <h4 className="text-2xl font-bold mb-5">Coffe House</h4>
                <p className="tangerine text-4xl">Dinos que quieres sentir y nosotros lo preparamos</p>
                <p>+11 3936 6942</p>
            </div>
            <div className="text-center md:text-right mt-12 md:mt-0">
                <h4 className="text-2xl font-bold mb-5 uppercase">horarios</h4>
                <p className="mb-2"><span className="text-orange-400">lun-vie</span>9.00am-7.00pm</p>
                <p className="mb-2"><span className="text-orange-400">sab</span>9.00am-7.00pm</p>
                <p className="mb-2"><span className="text-orange-400">dom</span>10.00am-6.00pm</p>
            </div>
        </footer>

    </div>
}