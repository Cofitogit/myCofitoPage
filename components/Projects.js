import { projects } from '../profile';
import Link from 'next/link';

export const Projects = () => (
  <>
    {projects.map(({ title, description, img }, i) => (
      <div className='col-md-4 p-2' key={i}>
        <div className='card h-100'>
          <div className='overflow'>
            <img src={img} alt='' className='card-img-top' />
          </div>
          <div className='card-body d-grid justify-content-between'>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href='#!' className='btn btn-info d-grid mx-auto'  style={{height: '40px'}}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
);
