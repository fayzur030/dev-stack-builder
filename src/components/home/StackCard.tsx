import type { Dispatch, SetStateAction } from 'react'
import type { TechItem } from '../../types/technologies'
import { RxCross2 } from 'react-icons/rx'
import { showInfoToast, showWarningTost } from '../../utils/toast'

interface ITechnologyCard {
  addStack: TechItem[]
  setAddStack: Dispatch<SetStateAction<TechItem[]>>
}

const StackCard = ({ addStack, setAddStack }: ITechnologyCard) => {
  const handelSingleRemoveStack = (id: string) => {
    const stackName = addStack.find((stack) => stack.id === id)
    const removeSingleStack = addStack.filter((stack) => stack.id !== id)
    setAddStack(removeSingleStack)
    showInfoToast(`${stackName?.name} removed successfully`)
  }
  const deleteAllStack = () => {
    if (addStack.length === 0) {
      showWarningTost('Your stack is already empty')
    } else {
      setAddStack([])
      showInfoToast(`All stacks removed successfully`)
    }
  }
  return (
    <div className='p-4 md:p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white sticky top-22'>
      {/* Header */}
      <div>
        <h1 className='text-base text-[#0F172A] font-semibold'>Stack Card</h1>

        <p className='text-[12px] text-[#94A3B8] mt-1'>
          {addStack.length === 0
            ? `No technologies selected yet.`
            : `${addStack.length} Technology Selected`}
        </p>
      </div>

      {/* Stack Items */}
      {addStack.length === 0 ? (
        <div className='border border-dashed border-[#E2E8F0] h-16 flex justify-center items-center text-[12px] text-[#94A3B8] rounded-lg'>
          Your stack is empty.
        </div>
      ) : (
        <div className='mt-4 space-y-3'>
          {addStack.map((stack) => (
            <div
              key={stack.id}
              className='flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200'
            >
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center'>
                  <img
                    src={stack.icon}
                    alt={stack.name}
                    className='w-7 h-7 object-contain'
                  />
                </div>

                <div>
                  <h2 className='text-sm font-semibold text-[#0F172A]'>
                    {stack.name}
                  </h2>

                  <p className='text-[11px] text-[#94A3B8] mt-0.5'>
                    {stack.category}
                  </p>
                </div>
              </div>

              {/* Remove Icon */}
              <button
                type='button'
                className=' flex items-center justify-center rounded-md text-[#94A3B8] hover:text-red-500 hover:bg-red-50 transition-all duration-200 cursor-pointer'
                onClick={() => handelSingleRemoveStack(stack.id)}
              >
                <RxCross2 size={22} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className='flex justify-center items-end mt-5'>
        <button
          className='text-[#D82C20] font-semibold px-6 w-full py-2 text-sm rounded-lg border border-[#D82C20] cursor-pointer hover:bg-red-50 transition-all  duration-300'
          onClick={() => deleteAllStack()}
        >
          Remove All
        </button>
      </div>
    </div>
  )
}

export default StackCard
