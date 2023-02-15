import Link from 'next/link';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg bg-dark'>
    <div className='container'>
      <Link className='navbar-brand text-light' href='/'>
        Portfolio
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link text-light' href='/blog'>
              Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-light' href='https://github.com/Cofitogit'>
              Github
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-light' href='https://linkedin.com/in/aguero-ce-dev'>
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
