import Link from 'next/link';

export function Back() {
  return (
    <div className='container d-grid py-3'>
      <button className='btn btn-danger mx-auto'>
        <Link href='/' className='nav-link text-light'>
          BACK
        </Link>
      </button>
    </div>
  );
}
