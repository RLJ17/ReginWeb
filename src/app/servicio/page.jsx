import Layout from '@/components/Layout'
import Image from 'next/image';

export default function Servicio() {
 return (
    <Layout patt="servicios">
      <main className='flex flex-row w-full h-96 mb-24 pl-10 justify-start items-end' >
        <div className='flex flex-col w-96 justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-7'>
        <Image src={"/regin1.png"} width={500} height={200} alt='LOGO REGIN PUBLICIDAD'></Image>
        <div className='w-80 h-16'><p>recemos disintos servicios para MYPEs. Brindamos ayuda en la elección de los servicios. Contáctanos.</p></div>
        </div>
        </div>
      </main>
      <div className='bg-regin_cyan p-8'></div>
      <div className='flex flex-col w-full gap-20'>
          <div className= 'flex flex-col justify-center items-start w-full h-12 pl-10 mt-12'>
          <h1 className= 'text-5xl' >Que ofrecemos :D</h1>
          </div>
          <div className='flex flex-row h-96 justify-center items-center gap-24'>
            <div className='w-1/2 h-96 flex  justify-center items-center bg-zinc-50 rounded-r-xl'  >
              <img src="/mercha.png" alt="mecha" width={330} height={200}/>
            </div>
            <div className='w-1/2 h-96 flex gap-14 flex-col justify-center items-center' >
              <h1 className= 'text-5xl'>Merchandising</h1>
              <button className= 'bg-regin_cyan rounded-md p-2' >Más información</button>
            </div>
          </div>

          <div className='flex flex-row h-96  items-center justify-center gap-24'>
          <div className='w-1/2 h-96 flex gap-14 flex-col justify-center items-center'>
              <h1 className= 'text-5xl'>Marketing digital </h1>
              <button className= 'bg-regin_cyan rounded-md p-2'>Más información</button>
          </div>
          <div className='w-1/2 h-96 flex justify-center items-center bg-zinc-50 rounded-l-xl'  >
              <img src="/marketing.png" alt="mecha" width={330} height={200}/>
          </div>
          </div>
        
          <div className='flex flex-row h-96  items-center justify-center gap-24'>
          <div className='w-1/2 h-96 flex justify-center items-center bg-zinc-50 rounded-r-xl'  >
              <img src="/mercha.png" alt="mecha" width={330} height={200}/>
          </div>
          <div  className='w-1/2 h-96 flex gap-14 flex-col justify-center items-center'>
              <h1 className= 'text-5xl'>Anuncios ATL</h1>
              <button className= 'bg-regin_cyan rounded-md p-2'>Más información</button>
          </div>
          </div>

          <div className='flex flex-row h-96  items-center justify-center gap-24'>
          <div className='w-1/2 h-96 flex gap-14 flex-col justify-center items-center'>
              <h1 className= 'text-5xl'>Anuncios BTL</h1>
              <button className= 'bg-regin_cyan rounded-md p-2'>Más información</button>
          </div>
          <div className='w-1/2 h-96 flex justify-center items-center bg-zinc-50 rounded-l-xl'  >
              <img src="/mercha.png" alt="mecha" width={330} height={200}/>
          </div>
          </div>
      </div>
    </Layout>
  );
}