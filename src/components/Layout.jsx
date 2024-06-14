import Link from "next/link"
import Image from "next/image"
export default function Layout({ children }) {
    return (
        <>
            <header className="flex justify-center">
                <div className="bg-white p-4 rounded-3xl flex items-center justify-between absolute w-11/12 top-5">
                    <nav>
                        <ul className="flex gap-20 items-center text-xl">
                            <li ><Image src={"/Logo2.png"} alt="regin" width={250} height={200}></Image></li>{/*REMPLAZAR POR LOGO CON CALIDAD*/}
                            <li className='hover:bg-regin_cyan p-3 rounded-md'><Link href={"/"}>Inicio</Link></li>
                            <li className='hover:bg-regin_cyan p-3 rounded-md'><Link href={"/servicio"}>Servicios</Link></li>
                            <li className='hover:bg-regin_cyan p-3 rounded-md'><Link href={"/Nosotros"}>Nosotros</Link></li>
                        </ul>
                    </nav>
                    <ul className="flex items-center gap-5">
                        <li className="font-thin">Siguenos en:</li>
                        <li><Image src={"/tiktok_logo.png"} alt="tiktok" width={42} height={42}></Image></li>
                        <li><Image src={"/instagram_logo.png"} alt="instagra" width={45} height={45}></Image></li>
                    </ul>
                </div>
            </header>
            <div className=" text-white">
                {children}
            </div>

        </>
    )
}