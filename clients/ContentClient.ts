import { SkillEntity } from '@/entities/ContentEntity'

const BASE_URL = process.env.STRAPI_URL

export const requestSkills = async (): Promise<SkillEntity[]> => {
  try {
    const response = await fetch(`${BASE_URL}skills`)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status} - ${response.statusText}`)
    }

    const { data } = await response.json()
    return data
  } catch (err) {
    console.error('Error fetching data:', err)
    throw err
  }
}
