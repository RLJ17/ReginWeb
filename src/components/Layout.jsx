import Link from "next/link";
import Image from "next/image";
import "./Layout.css";

export default function Layout({ children , patt}) {
    return (
        <>
            <div className="section flex flex-col">
                <header className="header bg-white p-6 rounded-2xl min-h-32 flex-wrap flex items-center justify-between w-full mt-5">
                    <nav>
                        <ul className="nav flex gap-20 items-center text-xl">
                            <li className="navimage"><Link href={"/"}><Image src={"/mesclao2.svg"} className="min-w-64" alt="regin" width={100} height={200}></Image></Link></li>
                            <li className={patt === "inicio" ? 'focus rounded-md p-0 active-link' : 'focus p-0 rounded-md'}><Link className="hover:text-green-500 font-extrabold  tracking-widetransition-colors" href={"/"}>INICIO</Link></li>
                            <li className={patt === "servicios" ? 'rounded-md p-0 active-link' : 'p-0 rounded-md'}><Link className="hover:text-green-500 font-extrabold  tracking-wide transition-colors" href={"/servicio"}>SERVICIOS</Link></li>
                            <li className={patt === "nosotros" ? 'rounded-md p-0 active-link' : 'p-0 rounded-md'}><Link className="hover:text-green-500 font-extrabold  tracking-wide transition-colors" href={"/Nosotros"}>NOSOTROS</Link></li>
                        </ul>
                    </nav>
                    <ul className="socialmedias flex items-center gap-5">
                        <li className="font-bold">Síguenos en:</li>
                        <li><Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/tiktok_logo.png"} alt="tiktok" width={42} height={42}></Image></Link></li>
                        <li><Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/instagram_logo.png"} alt="instagra" width={45} height={45}></Image></Link></li>
                    </ul>
                </header>
                {children}
                <footer className="bg-regin_cyan p-4 min-h-32 flex flex-grow justify-around items-center w-full">
                    <Link href={"/"}><Image src={"/negativo.svg"} className="min-w-64" alt="regin" width={250} height={200}></Image></Link>
                    <p className="font-extrabold  text-white">Siguenos en nuestras cuentas</p>
                    <Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/tiktok.svg"} alt="tiktok" width={42} height={42}></Image></Link>
                    <Link href={"https://www.tiktok.com/@osito.peru?lang=es"} target="_blank"><Image className="min-w-11" src={"/ig.svg"} alt="instagram" width={45} height={45}></Image></Link>
                </footer>
            </div>
        </>
    )
}
