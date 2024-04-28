import HeaderLogo from '../../../assets/images/header-logo.svg'
import { navLinks } from '../../../constants/index';
import { hamburger } from '../../../assets/icons';

export function Navbar() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={HeaderLogo} alt="header logo" width={130} height={29} />
        </a>
        <u className='flex-1 flex justify-center items-center gap-16 list-none no-underline max-lg:hidden'>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{link.label}</a>
            </li>
          ))}
        </u>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="menu hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}
