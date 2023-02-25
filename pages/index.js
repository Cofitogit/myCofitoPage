import { Experiences } from '../components/Experiences';
import Layout from '../components/Layout';
import { Skills } from '../components/Skills';
import Link from 'next/link';
import { Projects } from '../components/Projects';

const Index = () => (
  <Layout>
    {/** header card */}
    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-secondary text-light'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='myCofitoPage/profile.jpg' alt='' className='img-fluid p-4' />
            </div>
            <div className='col-md-8 p-4 justify-content- d-grid'>
              <h1 className='fw-light'>Lucas Gabriel Agüero</h1>
              <h3 className='fw-lighter'>
                Diseño 3D | 4to año Ing. Civil
              </h3>
              <p>
                Alumno regular de Ingeniería Civil, actualmente me encuentro en la busqueda de mi primera experiencia profesional laboral que me permita aplicar y adquirir mayores conocimientos, con la ambición de formarme y unirme a un equipo de trabajo.
                Será un gusto poder asistir a una entrevista para demostrar que mi energía y habilidades pueden ser útiles para un puesto de trabajo en su empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second section */}

    <div className='row py-2'>
      <div className='col-md-4'>
        <div className='card bg-info h-100'>
          <div className='card-body text-center'>
            <h1 className='bg-dark rounded text-light fw-lighter py-2'>
              Habilidades
            </h1>

            <Skills />
          </div>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='card bg-info h-100'>
          <div className='card-body'>
            <h1 className='text-center bg-dark rounded text-light fw-lighter py-2'>
              Información
            </h1>

            <Experiences />
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}

    <div className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-dark'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center text-light fw-lighter py-1'>
                Portfolio
              </h2>
            </div>

            <Projects />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
