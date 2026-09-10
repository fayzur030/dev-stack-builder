import bannerLogo from '../../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center mt-7 md:mt-0 gap-8 px-5 md:px-6 lg:px-0'>
      <div className=' max-w-140 text-center lg:text-start space-y-3'>
        <h1 className='text-3xl md:text-6xl font-bold md:leading-16 text-[#0f172a]'>
          Build Your Ideal{' '}
          <span className='gradient-text'>Development Stack</span>
        </h1>
        <p className='text-sm md:text-lg font-normal text-[#475569] leading-snug'>
          Explore frontend, backend, database, and tooling{' '}
          <br className='block md:hidden' /> options,{' '}
          <br className='hidden md:block' /> compare them side by side, and put
          together the stack that fits your next project.
        </p>
        <div className='flex items-center gap-5 justify-center md:justify-start'>
          <button className='bg-gradient-to-r from-[#f97316] to-[#ec4899] text-white transition-all duration-300  hover:opacity-90 px-6 py-2.5 rounded-lg cursor-pointer text-sm font-semibold'>
            Explore Technologies
          </button>
          <button className='border border-[#E5E7EB] px-5 py-2.5 rounded-lg cursor-pointer hover:bg-neutral-200 transition-all duration-300  hover:opacity-90 text-sm font-semibold'>
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={bannerLogo} alt='banner-logo' />
      </div>
    </div>
  )
}

export default Banner
