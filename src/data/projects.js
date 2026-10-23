const projects = [
  {
    title: 'SplitLink',
    slug: 'splitlink',
    category: 'development',
    practice: 'Design × Development',
    projectType: 'Product',
    status: 'application',
    year: null,
    description: 'An expense-splitting platform for groups that need a clear shared record of who paid, who owes, and how to settle.',
    disciplines: ['Design', 'Development'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: true,
    repo: null,
    caseStudy: [
      {
        heading: 'The problem',
        body: 'Shared expenses fall apart when they live in chats and spreadsheets. SplitLink keeps the split, the balance, and the settlement in one product surface.',
      },
      {
        heading: 'The work',
        body: 'The project sits between product design and full-stack development: a readable interface for money, backed by a system that can store groups, expenses, and balances.',
      },
    ],
  },
  {
    title: 'DevJam',
    slug: 'devjam',
    category: 'development',
    practice: 'Design × Development',
    projectType: 'Product',
    status: 'application',
    year: null,
    description: 'A collaboration platform for developers — designed as both a product interface and a working system for people building together.',
    disciplines: ['Design', 'Development'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: true,
    repo: null,
    caseStudy: [
      {
        heading: 'The problem',
        body: 'Developer collaboration often splits across tools that were not designed as one experience. DevJam treats the collaboration space as a product, not a pile of features.',
      },
      {
        heading: 'The work',
        body: 'The interface and the underlying collaboration model were designed together, with the same attention to hierarchy, states, and the actual flow of work.',
      },
    ],
  },
  {
    title: 'BloodConnect',
    slug: 'bloodconnect',
    category: 'development',
    practice: 'Design × Development',
    projectType: 'Product',
    status: 'application',
    year: null,
    description: 'A location-based blood donation platform where people who need blood can reach nearby donors in real time.',
    disciplines: ['Design', 'Development'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    thumbnail: null,
    heroImage: null,
    featured: true,
    repo: 'https://github.com/Shreyanshp-3/Blood_Connect',
    caseStudy: [
      {
        heading: 'The problem',
        body: 'Finding a donor is time-sensitive and local. The product has to make nearby availability visible without turning an urgent moment into a complicated interface.',
      },
      {
        heading: 'The system',
        body: 'Logged-in donors can make themselves visible. Nearby users are surfaced through a dashboard so contact can happen when it actually matters. The stack is a MERN application, deployed on Vercel and Render.',
      },
    ],
  },
  {
    title: 'MyHealthDiary',
    slug: 'myhealthdiary',
    category: 'development',
    practice: 'Design × Development × AI',
    projectType: 'Product',
    status: 'application',
    year: null,
    description: 'A health-tracking product that combines a full-stack interface with machine learning and language-model assistance for diet, training, and everyday health questions.',
    disciplines: ['Design', 'Development', 'AI'],
    technologies: ['React', 'Express', 'Node.js', 'OpenAI'],
    thumbnail: null,
    heroImage: null,
    featured: true,
    repo: 'https://github.com/Shreyanshp-3/HealthDiary',
    caseStudy: [
      {
        heading: 'The product',
        body: 'MyHealthDiary brings diet planning, calorie tracking, nutrition lookup, and workout plans into one health surface, designed to be used rather than demonstrated.',
      },
      {
        heading: 'The intelligence',
        body: 'A question-and-answer flow uses a language model to help interpret symptoms and suggest next steps. The AI is a layer in the product, not the whole product.',
      },
    ],
  },
  {
    title: 'AI Resume Analyzer',
    slug: 'ai-resume-analyzer',
    category: 'ai',
    practice: 'Development × AI',
    projectType: 'Application',
    status: 'application',
    year: null,
    description: 'A resume analysis tool that reads a candidate’s materials against a job description and surfaces the match.',
    disciplines: ['Development', 'AI'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: false,
    repo: 'https://github.com/Shreyanshp-3/ai_resume_analyzer',
    caseStudy: [
      {
        heading: 'The idea',
        body: 'Hiring documents are unstructured. The analyzer treats the resume and the job description as texts to compare, then returns a reading of how well they align.',
      },
    ],
  },
  {
    title: 'AI E-commerce Agent',
    slug: 'ai-ecommerce-agent',
    category: 'ai',
    practice: 'Development × AI',
    projectType: 'Exploration',
    status: 'exploration',
    year: null,
    description: 'An exploration of an agent that can browse, reason, and act across an e-commerce workflow rather than answering in a single shot.',
    disciplines: ['Development', 'AI'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: false,
    repo: null,
    caseStudy: [
      {
        heading: 'Status',
        body: 'This is an exploration of agent architecture — retrieval, reasoning, and action in a shopping context — not a finished storefront or production assistant.',
      },
    ],
  },
  {
    title: 'RAG Knowledge Assistant',
    slug: 'rag-knowledge-assistant',
    category: 'ai',
    practice: 'Development × AI',
    projectType: 'Exploration',
    status: 'exploration',
    year: null,
    description: 'A retrieval-augmented assistant experiment: embed a corpus, retrieve the relevant chunks, then answer with that context in view.',
    disciplines: ['Development', 'AI'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: false,
    repo: null,
    caseStudy: [
      {
        heading: 'Status',
        body: 'This project is an exploration of retrieval, embeddings, and answer generation. It is a study of the architecture, not a claim of a completed production knowledge base.',
      },
    ],
  },
  {
    title: 'Design Project One',
    slug: 'design-project-one',
    category: 'design',
    practice: 'Design',
    projectType: 'Interface study',
    status: 'study',
    year: null,
    description: 'An interface study in layout, type, and hierarchy — how a product can be made readable before it is made clever.',
    disciplines: ['Design'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: false,
    repo: null,
    caseStudy: [
      {
        heading: 'The study',
        body: 'A focused look at grid, type scale, and the order of information in an interface. The point is composition, not ornament.',
      },
    ],
  },
  {
    title: 'Design Project Two',
    slug: 'design-project-two',
    category: 'design',
    practice: 'Design',
    projectType: 'Visual study',
    status: 'study',
    year: null,
    description: 'A visual and interaction study for product UI: spacing, rhythm, and the small states that make a surface feel considered.',
    disciplines: ['Design'],
    technologies: [],
    thumbnail: null,
    heroImage: null,
    featured: false,
    repo: null,
    caseStudy: [
      {
        heading: 'The study',
        body: 'Interaction design at the level of screens and states — how a layout holds together when someone actually moves through it.',
      },
    ],
  },
]

export { projects }

export const getProjectsByCategory = (category) =>
  projects.filter((project) => project.category === category)

export const getProject = (category, slug) =>
  projects.find((project) => project.category === category && project.slug === slug)

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured)

export const getAdjacentProjects = (category, slug) => {
  const list = getProjectsByCategory(category)
  const index = list.findIndex((project) => project.slug === slug)

  if (index === -1 || list.length < 2) {
    return { prev: null, next: null }
  }

  return {
    prev: list[(index - 1 + list.length) % list.length],
    next: list[(index + 1) % list.length],
  }
}
