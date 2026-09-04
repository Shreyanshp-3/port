const createProject = (title, slug, category) => ({
  title, slug, category,
  description: 'Placeholder project description.',
  disciplines: [], technologies: [], thumbnail: null, heroImage: null,
  year: null, projectType: null, caseStudy: [],
})

export const projects = [
  createProject('SplitLink', 'splitlink', 'development'),
  createProject('DevJam', 'devjam', 'development'),
  createProject('BloodConnect', 'bloodconnect', 'development'),
  createProject('MyHealthDiary', 'myhealthdiary', 'development'),
  createProject('AI Resume Analyzer', 'ai-resume-analyzer', 'ai'),
  createProject('AI E-commerce Agent', 'ai-ecommerce-agent', 'ai'),
  createProject('RAG Knowledge Assistant', 'rag-knowledge-assistant', 'ai'),
  createProject('Design Project One', 'design-project-one', 'design'),
  createProject('Design Project Two', 'design-project-two', 'design'),
]

export const getProjectsByCategory = (category) => projects.filter((project) => project.category === category)
export const getProject = (category, slug) => projects.find((project) => project.category === category && project.slug === slug)
