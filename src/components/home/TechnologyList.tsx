import { use } from 'react'
import type { TechItem } from '../../types/technologies'
import TechnologyCard from './TechnologyCard'
import StackCard from './StackCard'

interface Itechnologies {
  technologies: Promise<TechItem[]>
}

const TechnologyList = ({ technologies }: Itechnologies) => {
  const technologyItem = use(technologies)
  console.log(technologyItem)
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='mt-8 mb-4 space-y-2 text-center md:text-start'>
        <h1 className='text-3xl md:text-4xl  font-bold'>
          Explore the <span className='technologies'>Technologies</span>
        </h1>
        <p className='text-sm md:text-base font-normal text-[#64748B]'>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'>
        {/* Technology Cards */}
        <div className='lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {technologyItem.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>

        {/* Stack Card */}
        <div className='lg:col-span-3 mt-0 lg:mt-10 '>
          <StackCard />
        </div>
      </div>
    </div>
  )
}

export default TechnologyList
