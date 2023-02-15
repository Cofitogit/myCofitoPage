import { experiences } from '../profile';

export const Experiences = () => (
  <ul>
    {experiences.map(({ title, description, from, to }, index) => (
      <li key={index}>
        <h3>{title}</h3>
        <h5>
          {from}-{to ? to : 'current'}
        </h5>
        <p>{description}</p>
        <hr className='py-3'/>
      </li>
    ))}
  </ul>
);
