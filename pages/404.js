import Layout from '../components/Layout';
import Link from 'next/link';

const error404 = () => (
  <Layout>
    <div className='card text-center col-md-4 mx-auto py-4 bg-secondary text-light'>
      <h1 className='fw-lighter'>Error 404</h1>
      <p>LA PAGINA SOLICITADA NO EXISTE</p>
      <button className='btn btn-danger'><Link href="/" className='nav-link'>ATRAS</Link></button>
    </div>
  </Layout>
);

export default error404;
