import { useState } from 'react'
import logo from '../../assets/logo-text.png'
import MobileNav from './MobileNav'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='border-b border-[#F1F5F9] sticky top-0 z-50 bg-white'>
      {/* Mobile Navbar */}
      <div className='flex items-center justify-between px-4 py-4 md:hidden'>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <RxCross1 className='text-2xl' />
          ) : (
            <RxHamburgerMenu className='text-2xl' />
          )}
        </button>

        <img src={logo} alt='Dev Stack' className='w-28 h-auto' />

        <div className='flex gap-5 items-center '>
          <button className='text-xs font-semibold cursor-pointer text-[#475569]'>
            Sign In
          </button>
          <button className='text-white bg-[#D91B7E] px-4 py-1.5 text-xs font-semibold rounded-full cursor-pointer hover:bg-[#8b0249] duration-300 transition-all'>
            Sign Up
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100 max-w-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <MobileNav navLinks={navLinks} />
      </div>

      {/* Desktop Navbar */}
      <nav className='max-w-7xl mx-auto md:flex justify-between items-center py-5 hidden'>
        <img src={logo} alt='Dev Stack' className='' />

        <ul className='flex items-center gap-8 k'>
          {navLinks.map((item) => (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`font-semibold text-sm md:text-sm ${active === item.name ? 'text-[#DB2777]' : 'text-[#475569]'}`}
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className='flex gap-5 items-center'>
          <button className='text-sm font-semibold cursor-pointer text-[#475569]'>
            Sign In
          </button>
          <button className='text-white bg-[#D91B7E] px-5 py-2.5 text-sm font-semibold rounded-full cursor-pointer hover:bg-[#8b0249] duration-300 transition-all'>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
