import type { TechItem } from '../types/technologies'

export const getTechnologies = async (): Promise<TechItem[]> => {
  try {
    const response = await fetch('/technologies.json')
    if (!response.ok) {
      throw new Error('Failed to fetch technologies data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
  return []
}
