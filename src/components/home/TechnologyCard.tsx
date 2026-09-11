import type { Dispatch, SetStateAction } from 'react'
import type { TechItem } from '../../types/technologies'
import { getBadgeColor } from '../../utils/BadgeColors'
import { showSuccessToast, showWarningTost } from '../../utils/toast'
interface ItechnologyCard {
  technology: TechItem
  addStack: TechItem[]
  setAddStack: Dispatch<SetStateAction<TechItem[]>>
}
const TechnologyCard = ({
  technology,
  addStack,
  setAddStack,
}: ItechnologyCard) => {
  const isAdded = addStack.some((item) => item.id === technology.id)

  const handleAddToStack = () => {
    const isAlreadyAdded = addStack.some((item) => item.id === technology.id)

    if (isAlreadyAdded) {
      showWarningTost('Already added to stack')

      return
    }
    setAddStack([...addStack, technology])
    showSuccessToast(`${technology.name} added to stack successfully`)
  }

  return (
    <div
      className={` rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 space-y-3 ${isAdded ? 'border border-[#F29191]' : 'border border-gray-200'}`}
    >
      <div className='flex items-center justify-between'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='w-8 h-8 md:w-10 md:h-10 object-contain'
        />

        <span
          className={`text-sm font-medium px-3 py-1 rounded-full border ${getBadgeColor(
            technology.badge
          )}`}
        >
          {technology.badge}
        </span>
      </div>

      <div>
        <h3 className='mt-2 text-sm md:text-lg font-semibold text-[#0F172A]'>
          {technology.name}
        </h3>

        <p className='text-xs md:text-sm text-[#64748B] mt-1'>
          {technology.description}
        </p>
      </div>

      <div className='flex items-center justify-between mt-4'>
        <span className='text-[11px] text-[#64748B] bg-gray-200 px-2 py-1 rounded-lg font-medium'>
          {technology.category}
        </span>

        <span className='text-[11px] text-[#64748B] font-medium'>
          {technology.difficulty}
        </span>

        <span className='text-xs md:text-sm text-[#334155] font-semibold'>
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        type='button'
        disabled={isAdded}
        className={`w-full mt-4 text-[12px]  py-2 px-4 rounded-lg transition-colors duration-300 cursor-pointer ${isAdded ? 'bg-[#FEF2F2] text-red-500 font-semibold disabled:cursor-not-allowed' : 'bg-[#0F172A]   text-white font-semibold'}`}
        onClick={() => handleAddToStack()}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
export default TechnologyCard
