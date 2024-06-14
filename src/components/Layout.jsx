import Link from "next/link"
import Image from "next/image"
import "./Layout.css";
export default function Layout({ children }) {
    return (
        <>
            <div className="section flex flex-col w-full">
                <div className="header bg-white p-4 rounded-3xl min-h-32 flex-wrap flex items-center justify-between w-full mt-5">
                    <nav>
                        <ul className="nav flex gap-20 items-center text-xl">
                            <li className="navimage"><Link href={"/"}><Image src={"/Logo2.png"} className="min-w-64" alt="regin" width={250} height={200}></Image></Link></li>
                            <li className='focus rounded-md p-0'><Link className="hover:text-green-500 font-extrabold  tracking-widetransition-colors" href={"/"}>INICIO</Link></li>
                            <li className='p-0 rounded-md'><Link className="hover:text-green-500 font-extrabold  tracking-wide transition-colors" href={"/servicio"}>SERVICIOS</Link></li>
                            <li className='p-0 rounded-md'><Link className="hover:text-green-500 font-extrabold  tracking-wide transition-colors" href={"/Nosotros"}>NOSOTROS</Link></li>
                        </ul>
                    </nav>
                    <ul className="socialmedias flex items-center gap-5">
                        <li className="font-thin">Siguenos en:</li>
                        <li><Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/tiktok_logo.png"} alt="tiktok" width={42} height={42}></Image></Link></li>
                        <li><Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/instagram_logo.png"} alt="instagra" width={45} height={45}></Image></Link></li>
                    </ul>
                </div>
                <div className=" text-white">
                    {children}
                </div>
                <div className="footer bg-regin_cyan p-4 min-h-32 flex  justify-around items-center w-full mt-5">
                    <Link href={"/"}><Image src={"/Logo2.png"} className="min-w-64" alt="regin" width={250} height={200}></Image></Link>
                    <p className="font-extrabold  text-white">Siguenos en nuestras cuentas</p>
                    <Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/tiktok_logo.png"} alt="tiktok" width={42} height={42}></Image></Link>
                    <Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/instagram_logo.png"} alt="instagra" width={45} height={45}></Image></Link>
            </div>
        </div >
        </>
    )
}