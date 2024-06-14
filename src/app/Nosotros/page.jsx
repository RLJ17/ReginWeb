import Layout from "@/components/Layout"
import Image from "next/image"
export default function nosotros() {
    return (
        <Layout>
            <div className="flex mt-40 text-black justify-center mx-24 gap-64">
                <div className="bg-white flex flex-col items-center justify-center px-10 py-44 rounded-3xl max-w-2xl">
                    <h2 className="font-bold text-4xl">¿Quienes somos?</h2>
                    <p className="my-10 px-8 text-justify text-xl">
                        Regin Publicidad es una MYPE peruana fundada en 2022, la cual es una agencia de creatividad y contenido,
                        que ofrece soluciones integrales para las empresas que buscan aumentar su presencia en el mercado y alcanzar
                        sus objetivos de negocio. La agencia cuenta con un equipo de 5 profesionales especializados en diversas áreas
                        del marketing.
                    </p>
                </div>
                <div className=" flex justify-center">
                    <Image src={"/R.svg"} width={600} height={200}></Image>
                </div>
            </div>
            <div className="p-10 bg-regin_cyan my-20"></div>
            <div className="mx-24">
                <p className="font-bold text-4xl">Nuestra misión y visión</p>
                <div className="flex p-10 gap-96 justify-center">
                    <p className="text-3xl font-bold">MISIÓN</p>
                    <p className="bg-white text-black p-10 max-w-3xl rounded-3xl">Proporcionar a los clientes soluciones de marketing personalizadas y efectivas que les permitan alcanzar sus objetivos de
                    negocio. A su vez, se enfocan en entender sus necesidades y trabajar en estrecha colaboración con ellos para ofrecer servicios
                    de alta calidad y resultados excepcionales.</p>
                </div>
                <div className="flex p-10 gap-96 justify-center">
                    <p className="bg-white text-black p-10 max-w-3xl rounded-3xl">Ser líderes en el mercado de servicios de marketing personalizados, reconocidos por
                        nuestra calidad, creatividad e innovación en la creación de soluciones de marketing efectivas. Además, tienen como enfoque
                        desarrollar relaciones a largo plazo con nuestros clientes y proveedores, y en ofrecer un ambiente de trabajo en el que
                        nuestro equipo se sienta valorado y motivado para alcanzar su máximo potencial.</p>
                    <p className="text-3xl font-bold">VISIÓN</p>
                </div>
            </div>
        </Layout>
    )
}