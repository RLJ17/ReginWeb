import Layout from "@/components/Layout"
import Image from "next/image"
import "./nosotros.css";

export default function nosotros() {
    return (
        <Layout patt="nosotros">
            <div className="flex flex-row  mt-12 text-black justify-center gap-10">
                <div className="bg-white flex flex-col items-center justify-center px-10 py-44 rounded-3xl max-w-2xl">
                    <h2 className="font-bold text-4xl">¿Quienes somos?</h2>
                    <p className="my-10 px-8 text-justify text-xl">
                        Regin Publicidad es una MYPE peruana fundada en 2022, la cual es una agencia de creatividad y contenido,
                        que ofrece soluciones integrales para las empresas que buscan aumentar su presencia en el mercado y alcanzar
                        sus objetivos de negocio. La agencia cuenta con un equipo de 5 profesionales especializados en diversas áreas
                        del marketing.
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-white font-bold text-4xl text-center">Fundadora</p>
                    <p className="text-white mb-7 text-center">Renata Cabrejos</p>
                    <Image src={"/fundadora.png"} width={500} height={200} className="flex-grow rounded-3xl"></Image>
                </div>
            </div>
            <div className="p-10 bg-regin_cyan my-20"></div>
            <div className="mx-24">
                <p className="font-bold text-4xl text-white">Nuestra misión y visión</p>
                <div className="flex p-10 flex-col justify-center">
                    <div className="flex flex-row gap-28">
                        <div className="flex flex-col">
                            <p className="text-3xl font-bold text-white">MISIÓN</p>
                            <Image
                                src="/flecha.png"
                                alt="flecha"
                                layout="fixed"
                                width={500}
                                height={400}
                                objectFit="contain"
                                className='rotate-fle relative left-20 -top-8'
                            />
                        </div>
                        <p className="bg-white text-black p-10 max-w-3xl rounded-3xl">Proporcionar a los clientes soluciones de marketing personalizadas y efectivas que les permitan alcanzar sus objetivos de
                            negocio. A su vez, se enfocan en entender sus necesidades y trabajar en estrecha colaboración con ellos para ofrecer servicios
                            de alta calidad y resultados excepcionales.</p>
                    </div>
                </div>
                <div className="flex p-10 flex-col justify-center">
                    <div className="flex flex-row gap-28">
                        <p className="bg-white text-black p-10 max-w-3xl rounded-3xl">Ser líderes en el mercado de servicios de marketing personalizados, reconocidos por
                            nuestra calidad, creatividad e innovación en la creación de soluciones de marketing efectivas. Además, tienen como enfoque
                            desarrollar relaciones a largo plazo con nuestros clientes y proveedores, y en ofrecer un ambiente de trabajo en el que
                            nuestro equipo se sienta valorado y motivado para alcanzar su máximo potencial.</p>
                        <div className="flex flex-col items-start">
                            <Image
                                src="/flecha.png"
                                alt="flecha"
                                layout="fixed"
                                width={500}
                                height={400}
                                objectFit="contain"
                                className='rotate-fle2 relative right-20 -bottom-8 '
                            />
                            <p className="text-3xl font-bold text-white">VISIÓN</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-10 bg-regin_cyan my-20"></div>
            <div className="mx-24">
                <p className="font-bold text-4xl text-white">Nuestros valores</p>
                <Image
                    src="/valores.svg"
                    alt="flecha"
                    width={500}
                    height={500}
                    objectFit="contain"
                    className='w-full flex justify-between items-center p-6 m-6'
                />
            </div>
        </Layout>
    )
}