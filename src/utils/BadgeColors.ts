export const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Popular':
      return 'text-[#0EA5E9] bg-[#EDF9FF] border-none'

    case 'Versatile':
      return 'text-[#059669] bg-[#ECFDF5] border-none'

    case 'Fast':
      return 'text-[#EA580C] bg-[#FFF7ED] border-none'

    case 'SSR / Edge':
      return 'text-[#7E22CE] bg-[#F5F3FF] border-none'

    case 'Standard':
      return 'text-[#059669] bg-[#ECFDF5] border-none'
    case 'Top SQL':
      return 'text-[#2563EB] bg-[#EFF6FF] border-none '
    case 'Cache':
      return 'text-[#DC2626] bg-[#FEF2F2] border-none'
    case 'Ubiquitous':
      return 'text-[#D97706] bg-[#FFFBEB] border-none'
    case 'Essential':
      return 'text-[#0EA5E9] bg-[#EDF9FF] border-none'
    case 'Robust':
      return 'text-[#0EA5E9] bg-[#EDF9FF] border-none'
    case 'Modern':
      return 'text-[#2563EB] bg-[#EFF6FF] border-none'
    case 'Containers':
      return 'text-[#059669] bg-[#ECFDF5] border-none'

    default:
      return 'text-gray-600 bg-gray-100 border-gray-300'
  }
}
