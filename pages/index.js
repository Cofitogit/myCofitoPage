import { Experiences } from '../components/Experiences';
import Layout from '../components/Layout';
import { Skills } from '../components/Skills';
import Link from 'next/link'
import { Projects } from '../components/Projects';

const Index = () => (
  <Layout>
    {/** header card */}
    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-secondary text-light'>
          <div className='row'>
            <div className='col-md-4'>
              <img src='profile.jpg' alt='' className='img-fluid p-4' />
            </div>
            <div className='col-md-8 p-4'>
              <h1 className='fw-light'>Carlos Enrique Agüero</h1>
              <h3 className='fw-lighter'>
                Front-end Developer | Javascript | React
              </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
                mollitia tenetur. Molestias harum cupiditate, neque, tempora
                quis mollitia sunt, recusandae odit aspernatur vero error.
                Facere perferendis ex nobis voluptatibus animi!
              </p>
              <a href='/hireme'>Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second section */}

    <div className='row py-2'>
      <div className='col-md-4'>
        <div className='card bg-info h-100'>
          <div className='card-body'>
            <h1>Skills</h1>

            <Skills />
          </div>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='card bg-info h-100'>
          <div className='card-body'>
            <h1>Experience</h1>

            <Experiences />
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}

    <div className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-dark'>
          <div className="row">
            <div className="col-md-12">
              <h2 className='text-center text-light fw-lighter py-1'>Portfolio</h2>
            </div>

            <Projects />

          </div>
          <div className="text-center mt-3">
            <Link href="#!" className='btn btn-outline-light'>More projects</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
