import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className='flex items-center flex-1 h-2/5'>
        <div className='w-full flex flex-col items-center'>
          <Image src={"/logoHome.svg"} width={500} height={200} alt='LOGO REGIN PUBLICIDAD' />
          <h2 className='px-8 sm:px-28 pt-10 text-xl text-center'>Agencia de marketing en Lima. Ofrecemos servicios de calidad y a buen precio para todo tipo de empresas.</h2>
        </div>
        <div className='bg-zinc-500 w-full relative -z-40 h-full'>
          <Image src={"/homeImage.png"} className='min-h-full min-w-full' alt='home image' width={500} height={200} />
        </div>
      </div>
      <div className='bg-regin_cyan p-8'></div>
      <div>
        <div className='font-bold text-8xl text-left max-w-5xl mx-4 sm:mx-36 mt-36 mb-16'>
          Tu campaña soñada a un paso ...
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-8 '>
          <Image
            src="/flecha.png"
            alt="flecha"
            width={400}
            height={200}
            objectFit="contain"
            className='-rotate-90'
          />
          <a href="/formulario"><button className='bg-regin_cyan p-6 sm:p-10 font-bold text-2xl rounded-xl mt-8 sm:mt-80 h-max text-black'>Agenda una cita</button></a>
        </div>
        <div className='bg-regin_grey text-black p-8 sm:p-16 flex flex-col'>
          <p className='text-5xl font-bold mb-8 sm:mb-20'>¿Por qué Regin?</p>
          <div className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-52 p-6 sm:p-14 text-2xl '>
            <div className='flex flex-col items-center w-44'>
              <Image src={"/proyectos.png"} width={100} height={100} alt='proyectos' />
              <p className='text-4xl font-bold mb-2 mt-7'>50</p>
              <span className='text-center'>Proyectos</span>
            </div>
            <div className='flex flex-col items-center w-44'>
              <Image src={"/proyectos.png"} width={100} height={100} alt='proyectos' />
              <p className='text-4xl font-bold mb-2 mt-7'>5</p>
              <span>Certificaciones</span>
            </div>
            <div className='flex flex-col items-center w-44'>
              <Image src={"/proyectos.png"} width={100} height={100} alt='proyectos' />
              <p className='text-4xl font-bold mb-2 mt-7'>3</p>
              <span>Años de experiencia</span>
            </div>
          </div>
        </div>
        <div className='bg-regin_cyan p-8 sm:p-16'>
          <p className='font-bold text-4xl'>¿Quiénes confiaron en nosotros?</p>
        </div>
      </div>
    </Layout>
  );
}
