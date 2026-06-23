const STORAGE_KEY = 'admin_projects'

const defaultProjects = [
  {
    id: 1,
    title: 'Service Upgrade - Alberta',
    location: 'Alberta, Canada',
    description: 'Residential panel upgrade with safer capacity for modern home loads.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  },
  {
    id: 2,
    title: 'Office Lighting Retrofit',
    location: 'Alberta, Canada',
    description: 'Energy-conscious lighting refresh for a busy commercial workspace.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&q=80',
  },
  {
    id: 3,
    title: 'EV Charging Installation',
    location: 'Alberta, Canada',
    description: 'Dedicated garage charger circuit with clean routing and final testing.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80',
  },
]

export const loadProjects = () => {
  if (typeof window === 'undefined') return defaultProjects

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects))
      return defaultProjects
    }
    const storedProjects = JSON.parse(stored).map((project) => ({
      ...project,
      title: project.title === 'Panel Upgrade - NE Calgary' ? 'Service Upgrade - Alberta' : project.title,
      location: project.location === 'Calgary, AB' ? 'Alberta, Canada' : project.location,
    }))

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedProjects))
    return storedProjects
  } catch {
    return defaultProjects
  }
}

export const saveProjects = (projects) => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  } catch {
    // ignore storage errors
  }
}
