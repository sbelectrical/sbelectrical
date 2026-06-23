const STORAGE_KEY = 'admin_jobs'

const defaultJobs = [
  {
    id: 1,
    title: 'Residential Electrician Journeyman',
    location: 'Alberta, Canada',
    type: 'Full-time',
    pay: '$40.00 - $46.00 Hourly',
    hoursPerWeek: '44',
    schedule: 'Monday-Friday daytime hours',
    summary:
      'Join SB Electrical as a skilled electrician supporting residential and light commercial projects with safe, clean, high-quality workmanship.',
    responsibilities: [
      'Install and repair electrical systems in residential and commercial spaces',
      'Read blueprints, schematics, and technical drawings',
      'Troubleshoot electrical issues and complete safe solutions',
      'Coordinate with project teams and maintain job-site standards',
    ],
    qualifications: [
      'Journeyman Electrician certification or equivalent experience',
      'Strong understanding of electrical systems and components',
      'Commitment to safety, quality workmanship, and clear communication',
      'Own basic tools and required PPE',
    ],
    benefits: [
      'Competitive hourly pay',
      'Steady full-time schedule',
      'Supportive team environment',
      'Growth and advancement opportunities',
    ],
  },
  {
    id: 2,
    title: 'Apprentice Electrician',
    location: 'Alberta, Canada',
    type: 'Full-time',
    pay: '$22.00 - $32.00 Hourly',
    hoursPerWeek: '40',
    schedule: 'Monday-Friday with occasional site needs',
    summary:
      'Support licensed electricians on residential and commercial installations while building hands-on field experience in a safety-focused team.',
    responsibilities: [
      'Assist with wiring, fixture installation, panel work, and site preparation',
      'Organize materials, tools, and work areas for efficient daily progress',
      'Follow electrical code, site safety requirements, and supervisor direction',
      'Help test, troubleshoot, and document completed electrical work',
    ],
    qualifications: [
      'Registered electrical apprentice or interest in electrical trade work',
      'Basic knowledge of tools, construction sites, and safe work practices',
      'Reliable, punctual, and willing to learn from experienced electricians',
      'Valid driver license preferred',
    ],
    benefits: [
      'Hands-on training with experienced electricians',
      'Steady local project work',
      'Supportive team environment',
      'Career growth toward journeyman certification',
    ],
  },
  {
    id: 3,
    title: 'Electrical Site Supervisor',
    location: 'Alberta, Canada',
    type: 'Full-time',
    pay: '$46.00 - $55.00 Hourly',
    hoursPerWeek: '44',
    schedule: 'Monday-Friday daytime hours',
    summary:
      'Lead electrical crews, coordinate job-site progress, and maintain SB Electrical standards for safety, workmanship, and client communication.',
    responsibilities: [
      'Coordinate daily crew tasks, materials, inspections, and project timelines',
      'Review drawings, resolve site issues, and communicate updates clearly',
      'Maintain safety standards, quality control, and clean job-site practices',
      'Support electricians and apprentices with technical guidance',
    ],
    qualifications: [
      'Journeyman Electrician certification or strong equivalent experience',
      'Proven leadership experience on residential or commercial electrical sites',
      'Ability to read drawings and coordinate with clients, trades, and inspectors',
      'Strong communication, planning, and problem-solving skills',
    ],
    benefits: [
      'Competitive supervisor pay',
      'Leadership role with stable project work',
      'Growth and advancement opportunities',
      'Professional and safety-focused work environment',
    ],
  },
]

export const loadJobs = () => {
  if (typeof window === 'undefined') return defaultJobs

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultJobs))
      return defaultJobs
    }

    const storedJobs = JSON.parse(stored).map((job) => ({
      ...job,
      location: job.location === 'Calgary, AB' ? 'Alberta, Canada' : job.location,
    }))
    const storedIds = new Set(storedJobs.map((job) => job.id))
    const missingDefaultJobs = defaultJobs.filter((job) => !storedIds.has(job.id))

    if (missingDefaultJobs.length) {
      const mergedJobs = [...storedJobs, ...missingDefaultJobs]
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedJobs))
      return mergedJobs
    }

    return storedJobs
  } catch {
    return defaultJobs
  }
}

export const saveJobs = (jobs) => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
  } catch {
    // ignore storage errors
  }
}
