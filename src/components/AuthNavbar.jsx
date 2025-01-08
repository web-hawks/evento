import { Link } from 'react-router-dom';
import { EventoDark, EventoLight } from '../assets/assets';

function AuthNavbar() {
  return (
    <Link
      to={'/'}
      className='mx-auto mb-auto w-[180px] pb-4 lg:mx-0'
    >
      <img
        src={EventoDark}
        className='hidden dark:block'
        alt='Dark Logo'
      />
      <img
        src={EventoLight}
        className='dark:hidden'
        alt='Dark Logo'
      />
    </Link>
  );
}

export default AuthNavbar;
