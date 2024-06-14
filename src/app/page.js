import Layout from '@/components/Layout'
import Image from 'next/image';
export default function Home() {
  return (
    <Layout>
      <div className='flex items-center flex-1'>
        <div className='w-screen flex flex-col items-center'>
          <Image src={"/logoHome.svg"} width={500} height={200} alt='LOGO REGIN PUBLICIDAD'></Image>
          <h2 className='px-28 pt-10 text-xl'>Agencia de marketing en Lima. Ofrecemos servicios de calidad y a buen precio para todo tipo de empresas.</h2>
        </div>
        <div className='bg-zinc-500 w-screen h-screen relative -z-40'>
          <Image src={"/homeImage.png"} alt='home image' layout='fill'></Image>
        </div>
      </div>
      <div className='bg-regin_cyan p-8'></div>
      <div className=''>
        <div className='font-bold text-8xl text-left max-w-5xl mx-36 mt-36 mb-16'>
          Tu campaña soñada a un paso ...
        </div>
        <div className='flex justify-center gap-32 mb-36'>
          <Image
            src="/flecha.png"
            alt="flecha"
            layout="fixed"
            width={400}
            height={200}
            objectFit="contain"
            className='-rotate-90'
          />
           <a href="/formulario"><button className='bg-regin_cyan p-10 font-bold text-2xl rounded-xl mt-80 h-max  text-black'>Agenda una cita</button></a>
        </div>
        <div className='bg-regin_grey text-black p-16'>
          <p className='text-5xl font-bold mb-20'>¿Por qué Regin?</p>
          <div className='flex justify-between mx-52 p-14 text-2xl '>
            <div className='flex flex-col items-center'>
              <Image src={"/proyectos.png"} width={100} height={100} alt='proyectos'></Image>
              <p className='text-4xl font-bold mb-2 mt-7'>50</p>
              <span>Proyectos</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={"/proyectos.png"} width={100} height={100} alt='proyectos'></Image>
              <p className='text-4xl font-bold mb-2 mt-7'>5</p>
              <span>Certificaciones</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={"/proyectos.png"} width={100} height={100} alt='proyectos'></Image>
              <p className='text-4xl font-bold mb-2 mt-7'>3</p>
              <span>Años de experiencia</span>
            </div>
          </div>
        </div>
        <div className='bg-regin_cyan p-16'>
          <p className='font-bold text-4xl'>¿Quienes confiaron en nosotros?</p>
        </div>
      </div>

    </Layout>
  );
}
