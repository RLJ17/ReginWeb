import Layout from '@/components/Layout';
import Image from 'next/image';
import "./gracias.css";

export default function Home() {
  return (
    <Layout>
      <section className='container-gracias'>

        <div className='text-container text-neutral-50'>
        <div className='logo-container flex items-start'>
          <Image src={"/color.svg"} alt="Regin Logo" width={200} height={500} />
        </div>
          <h1 className='text-5xl mb-8 font-bold'>Te agradece por la confianza</h1>
          <p className='text-3xl mb-8'>Hemos recibido tu mensaje. En la brevedad nos comunicaremos con usted para confirmar su cita.</p>
          <p className='text-3xl mb-8'>Te animamos a seguir visualizando nuestros servicios.</p>
          <a href="" className="boton-volver py-3 px-6 bg-emerald-300 text-black rounded-lg font-bold hover:bg-neutral-50 mb-4">
            Volver al inicio
          </a>
        </div>
      </section>
    </Layout>
  );
}
