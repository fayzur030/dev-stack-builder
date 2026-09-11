import footerLogo from '../../assets/logo-text.png'

const footerLinks = [
  {
    title: 'PRODUCT',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Technologies', path: '/technologies' },
      { name: 'Projects', path: '/projects' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Careers', path: '/careers' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className='border-t border-[#E2E8F0] mt-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 py-14 md:py-16'>
          {/* Logo & Description */}
          <div className='space-y-5'>
            <img src={footerLogo} alt='Dev Stack' className='h-7 w-auto' />

            <p className='text-[#64748B] text-sm leading-6 max-w-md'>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <ul className='flex items-center gap-6'>
              <li>
                <a
                  href='#'
                  className='text-xs font-semibold text-[#475569] transition-colors duration-200 hover:text-[#0F172A]'
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-xs font-semibold text-[#475569] transition-colors duration-200 hover:text-[#0F172A]'
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-xs font-semibold text-[#475569] transition-colors duration-200 hover:text-[#0F172A]'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
            {footerLinks.map((section) => (
              <div key={section.title} className='space-y-4'>
                <h3 className='text-xs font-bold tracking-wider text-[#0F172A]'>
                  {section.title}
                </h3>

                <ul className='space-y-2'>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className='text-xs text-[#64748B] transition-colors duration-200 hover:text-[#0F172A]'
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-[#E2E8F0] py-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-xs text-[#64748B]'>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className='flex items-center gap-6'>
            <a
              href='/privacy-policy'
              className='text-xs text-[#64748B] transition-colors duration-200 hover:text-[#0F172A]'
            >
              Privacy
            </a>

            <a
              href='/terms-of-service'
              className='text-xs text-[#64748B] transition-colors duration-200 hover:text-[#0F172A]'
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
