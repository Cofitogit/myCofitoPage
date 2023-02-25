import { useEffect } from 'react';
import Navbar from './Navbar';
import {useRouter} from 'next/router'

const Layout = ({ children }) => {

  const router = useRouter()


  useEffect(() => {
   router.events.on('routeChangeStart', url => console.log(url)) 

  }, [])
  

  return (
    <>
      <Navbar />

      <main className='container py-4'>{children}</main>

      <footer className='bg-dark text-light text-center'>
        <div className='container py-2'>
          <h3 className='fw-lighter'>Contacto</h3>
          <p>lucas.aguero98@gmail.com</p>
          <p>Tel.: 3541-646965</p>
          <p>Córdoba capital</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
