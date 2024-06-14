import Layout from '@/components/Layout'
import Image from 'next/image';
export default function Home() {
  return (
      /*<div className="flex flex-col items-center p-6 text-center bg-gray-900 text-white min-h-screen">
        <div className="w-full max-w-2xl">
          <div className="flex justify-center mb-4">
            <Image src={"/R.svg"} alt="Regin Logo" width={200} height={200} />
          </div>
          <h1 className="text-3xl font-bold text-green-500 mb-2">REGIN</h1>
          <h2 className="text-2xl font-bold mb-6">Te agradece por la confianza</h2>
          <p className="mb-4">
            Hemos recibido tu mensaje. En la brevedad para a comunicarnos con usted confirmar su cita.
          </p>
          <p className="mb-8">
            Te animamos a seguir visualizando nuestros servicios.
          </p>
          <a href="/" className="py-3 px-6 bg-green-500 text-black rounded-lg font-bold hover:bg-green-600">
            Volver al inicio
          </a>
        </div>
      </div>*/

    <div>
        <div className='w-20% bg-slate-50'>
            <div className='bg-slate-400 w-1/5'>
                <Image src={"/R.svg"} alt="Regin Logo" width={200} height={200} />
            </div>
            <div className=' bg-gray-400 w-3/5' >
                EGIN
            </div>
        </div>
        <div className='w-80% bg-slate-200'>
            Te agradece por la confianza
        </div>
        <div>
            <div>
                <p>Hemos recibido tu mensaje. En la brevedad nos comunicaremos con usted para confirmar su cita.</p>
                <p>Te animamos a seguir visualizando nuestros servicios.</p>
            </div>
            <div>
                Volver al inicio
            </div>
        </div>
    </div>

  );
}
