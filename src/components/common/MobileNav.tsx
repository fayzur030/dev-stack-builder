interface MobileNavbarProps {
  navLinks: {
    name: string
    path: string
  }[]
}

const MobileNav = ({ navLinks }: MobileNavbarProps) => {
  return (
    <div className='bg-white border-t border-[#F1F5F9] px-5 py-6 shadow-lg '>
      <ul className='flex flex-col gap-1'>
        {navLinks.map((item) => (
          <li
            key={item.name}
            className='group rounded-xl font-semibold text-sm text-[#475569] transition-all duration-500 hover:bg-[#FDF2F8] hover:text-[#D91B7E]'
          >
            <a href={item.path} className='block px-4 py-3'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav
