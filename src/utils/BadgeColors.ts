export const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Popular':
      return 'text-[#0EA5E9] bg-[#EDF9FF] border border-[#90CAF9]'

    case 'Versatile':
      return 'text-[#059669] bg-[#ECFDF5] border border-[#BBFAED]'

    case 'Fast':
      return 'text-[#EA580C] bg-[#FFF7ED] border border-[#FFEDD2]'

    case 'SSR / Edge':
      return 'text-[#7E22CE] bg-[#F5F3FF] border'

    case 'Standard':
      return 'text-[#059669] bg-[#ECFDF5] border border-[#BBFAED]'
    case 'Top SQL':
      return 'text-[#2563EB] bg-[#EFF6FF] border border-[#D8EAFF] '
    case 'Cache':
      return 'text-[#DC2626] bg-[#FEF2F2] border border-[#FFE2DD]'
    case 'Ubiquitous':
      return 'text-[#D97706] bg-[#FFFBEB] border border-[#FAF3C5]'
    case 'Essential':
      return 'text-[#0EA5E9] bg-[#EDF9FF] border border-[#90CAF9]'
    case 'Robust':
      return 'text-[#0EA5E9] bg-[#EDF9FF] border border-[#90CAF9]'
    case 'Modern':
      return 'text-[#0891B2] bg-[#E4FEFF] border border-[#BDFAFF]'
    case 'Containers':
      return 'text-[#00C3F4] bg-[#E0F2FE] border border-[#90CAF9]'

    default:
      return 'text-gray-600 bg-gray-100 border-gray-300'
  }
}
