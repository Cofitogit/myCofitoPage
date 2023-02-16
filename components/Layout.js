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
          <h3 className='fw-lighter'>&copy; Carlos Enrique Agüero Porfolio</h3>
          <p>2022 - {new Date().getFullYear()}</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
