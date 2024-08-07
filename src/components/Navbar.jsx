import { useState, useRef  } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    return <nav className="navbar bg-black text-white sticky top-[-60px] z-10 xl:top-[-60px]">
        <section className="p-3 flex justify-between border-b-2 border-gray-700 ">
            <div className="flex items-center text-sm leading-4 sm:none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google-maps text-orange-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M6.428 12.494l7.314 -9.252" /><path d="M10.002 7.935l-2.937 -2.545" /><path d="M17.693 6.593l-8.336 9.979" /><path d="M17.591 6.376c.472 .907 .715 1.914 .709 2.935a7.263 7.263 0 0 1 -.72 3.18a19.085 19.085 0 0 1 -2.089 3c-.784 .933 -1.49 1.93 -2.11 2.98c-.314 .62 -.568 1.27 -.757 1.938c-.121 .36 -.277 .591 -.622 .591c-.315 0 -.463 -.136 -.626 -.593a10.595 10.595 0 0 0 -.779 -1.978a18.18 18.18 0 0 0 -1.423 -2.091c-.877 -1.184 -2.179 -2.535 -2.853 -4.071a7.077 7.077 0 0 1 -.621 -2.967a6.226 6.226 0 0 1 1.476 -4.055a6.25 6.25 0 0 1 4.811 -2.245a6.462 6.462 0 0 1 1.918 .284a6.255 6.255 0 0 1 3.686 3.092z" /></svg>
                <div>
                    <p className="capitalize">donde estamos:</p>
                    <span>av. santa fe, 1234</span>
                </div>
            </div>
            <div className="text-center">
                <h4 className="font-bold text-center">Coffee House</h4>
            </div>
            <div className="flex items-center leading-4 text-right text-sm gap-2">
                <div>
                    <p className="capitalize">horario:</p>
                    <span>lun - vie 9.00am - 10.00pm</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock text-orange-400"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
            </div>
        </section>
        <section className="p-3 flex justify-end sm:justify-between  items-center w-full bg-black">
            <div></div>
            <div className="hidden sm:block">
                <ul className="uppercase flex gap-3">
                    <li>home</li>
                    <li>menu</li>
                    <li>blog</li>
                    <li>shop</li>
                    <li>contacto</li>
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </div>
                <div className="sm:hidden ">
                    <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                </div>
            </div>
        </section>
        <section className="w-full text-center">
        {isOpen && (
            <ul className="uppercase pb-6 absolute w-full bg-black">
                <li className="pb-3">home</li>
                <li className="pb-3">menu</li>
                <li className="pb-3">blog</li>
                <li className="pb-3">shop</li>
                <li className="pb-3">contacto</li>
            </ul>
        )}
        </section>
    </nav>
}