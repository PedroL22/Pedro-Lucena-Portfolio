export interface SkillEntity {
  id: number
  attributes: {
    type: 'backend' | 'frontend'
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
