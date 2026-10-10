import kurtPortrait from './kurt.jpg'
import kurtsad from './kurtsad.jpg'

export const portfolioData = {
  profile: {
    name: 'Kurt',
    monogram: 'K',
    headline: 'A creative mind with a passion for technology.',
    degree: 'BS Computer Engineering',
    university: 'Cagayan State University',
    location: 'Cagayan, Philippines',
    email: '',
    photoUrl: kurtPortrait,
    darkPhotoUrl: kurtsad,
    cvUrl: '/kurt-cv.pdf',
    heroSummary:
      'I’m a 4th year Computer Engineering student at Cagayan State University with a strong interest in graphic design, web development, and quality assurance.',
    primaryCta: 'View My Projects',
    secondaryCta: 'Send a Message',
  },

  navigation: [
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    title: 'About Me',
    tagline: 'A creative mind with a passion for technology.',
    cards: [
      {
        id: 'who-i-am',
        icon: 'compass',
        title: 'Who I Am',
        body: 'I’m a 4th year Computer Engineering student at Cagayan State University with a strong interest in graphic design, web development, and quality assurance. I enjoy turning ideas into meaningful digital experiences by combining creativity with technical skills.',
      },
      {
        id: 'what-i-do',
        icon: 'layers',
        title: 'What I Bring',
        body: 'While graphic design is my strongest suit, I also enjoy coding, testing applications, and finding ways to improve user experience. My experience as a Virtual Assistant has helped me develop organization, communication, and time-management skills that I bring into every project.',
      },
      {
        id: 'how-i-grow',
        icon: 'seedling',
        title: 'How I Grow',
        body: 'I’m always open to learning, exploring new ideas, and growing both creatively and professionally.',
      },
    ],
  },

  skills: {
    title: 'Skills',
    subtitle:
      'Combining visual design sensibility with web engineering, software testing, and dependable administrative execution.',
    categories: [
      {
        id: 'graphic-design',
        title: 'Graphic Design & Visual Creativity',
        badge: 'My strongest skill',
        isPrimary: true,
        icon: 'palette',
        description:
          'Creating visually appealing layouts, social media graphics, presentation materials, and cohesive digital designs using Canva and design principles.',
        tools: ['Canva', 'Layout Composition', 'Social Media Graphics', 'Presentation Materials', 'Visual Consistency'],
      },
      {
        id: 'web-development',
        title: 'Web Development & Programming',
        badge: null,
        isPrimary: false,
        icon: 'code',
        description:
          'Building and improving websites and web-based systems using HTML, CSS, JavaScript, PHP, and other programming tools I have worked with.',
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Web-Based Systems'],
      },
      {
        id: 'quality-assurance',
        title: 'Quality Assurance (QA)',
        badge: null,
        isPrimary: false,
        icon: 'shield-check',
        description:
          'Checking system functionality, identifying potential issues, testing user flows, and helping ensure applications work as intended.',
        tools: ['System Functionality', 'User Flow Testing', 'Issue Identification', 'Usability Checks'],
      },
      {
        id: 'virtual-assistance',
        title: 'Virtual Assistance & Administrative Support',
        badge: null,
        isPrimary: false,
        icon: 'briefcase',
        description:
          'Email management, data entry, document organization, Microsoft Office tools, and other administrative tasks that require accuracy and reliability.',
        tools: ['Email Management', 'Data Entry', 'Document Organization', 'Microsoft Office'],
      },
    ],
    toolkitPills: [
      { label: 'All Skills', categoryId: 'all' },
      { label: 'Canva', categoryId: 'graphic-design' },
      { label: 'Visual Layout', categoryId: 'graphic-design' },
      { label: 'HTML', categoryId: 'web-development' },
      { label: 'CSS', categoryId: 'web-development' },
      { label: 'JavaScript', categoryId: 'web-development' },
      { label: 'PHP', categoryId: 'web-development' },
      { label: 'QA Testing', categoryId: 'quality-assurance' },
      { label: 'UI/UX Flows', categoryId: 'quality-assurance' },
      { label: 'Microsoft Office', categoryId: 'virtual-assistance' },
      { label: 'Admin & Data Entry', categoryId: 'virtual-assistance' },
    ],
  },

  projects: {
    title: 'Projects',
    subtitle: 'Academic and portal systems where I contributed UI/UX design, usability review, and quality assurance.',
    items: [
      {
        id: 'vetconnect',
        title: 'VetConnect: Real-Time Veterinary Services and Scheduling Portal',
        shortTitle: 'VetConnect Portal',
        category: 'QA & Usability',
        icon: 'calendar-heart',
        description:
          'A web-based platform designed to make veterinary services more accessible by helping pet owners connect with veterinary professionals, schedule appointments, and access pet-related services.',
        focus: 'Quality assurance, usability, and system functionality.',
        tags: ['Quality Assurance', 'Usability Testing', 'System Functionality', 'Scheduling Portal'],
        responsibilities: [
          'Checked end-to-end appointment scheduling flows between pet owners and veterinary professionals.',
          'Identified potential usability bottlenecks and functional issues across service booking screens.',
          'Verified that core portal features behaved consistently as intended across user scenarios.',
        ],
        liveUrl: '',
      },
      {
        id: 'askaudrey',
        title: 'AskAudrey Website',
        shortTitle: 'AskAudrey Website',
        category: 'UI/UX & QA',
        icon: 'layout-grid',
        description:
          'A portal project focused on providing users with an organized and accessible way to interact with information and portal features.',
        focus: 'UI/UX Designer & QA Tester',
        tags: ['UI/UX Design', 'QA Testing', 'Information Organization', 'Accessibility'],
        responsibilities: [
          'Designed user interfaces with attention to organized information hierarchy and intuitive navigation.',
          'Tested portal features and user interactions to verify accessibility and consistent system behavior.',
          'Collaborated on refining portal layouts so users could locate and interact with features clearly.',
        ],
        liveUrl: '',
      },
      {
        id: 'bluefox',
        title: 'BlueFox Life Insurance Agency Scheduling Portal',
        shortTitle: 'BlueFox Scheduling Portal',
        category: 'UI/UX & QA',
        icon: 'clock-check',
        description:
          'A website project intended to streamline appointment scheduling for insurance-related services through a more organized digital process.',
        focus: 'UI/UX Designer & QA Tester',
        tags: ['UI/UX Design', 'QA Testing', 'Appointment Scheduling', 'Digital Workflow'],
        responsibilities: [
          'Designed clean, structured scheduling interfaces to simplify insurance appointment booking.',
          'Evaluated user flows from initial service selection to appointment confirmation.',
          'Performed quality assurance checks to catch form handling and scheduling issues early.',
        ],
        liveUrl: '',
      },
    ],
  },

  experience: {
    title: 'Experience',
    subtitle: 'Hands-on experience across freelance virtual assistance, academic software projects, engineering coursework, and visual design.',
    items: [
      {
        id: 'virtual-assistant',
        role: 'Virtual Assistant',
        context: 'Remote / Freelance Experience',
        icon: 'mail-check',
        bullets: [
          'Assisted with email management, data entry, and administrative tasks.',
          'Organized digital information and maintained accuracy when handling records.',
          'Used digital tools and productivity platforms to support daily operations.',
          'Developed time management, communication, and organizational skills while working independently.',
        ],
      },
      {
        id: 'uiux-qa',
        role: 'UI/UX Design & Quality Assurance',
        context: 'Academic Project Experience',
        icon: 'check-circle',
        bullets: [
          'Contributed to the design and testing of web-based applications, including AskAudrey Portal and PruLife Appointment Scheduler Website.',
          'Designed user interfaces with a focus on usability, accessibility, and intuitive navigation.',
          'Tested system features, identified potential issues, and helped improve the overall user experience.',
          'Collaborated on project tasks to help ensure that designs and functionalities met user needs.',
        ],
      },
      {
        id: 'computer-engineering',
        role: 'Computer Engineering & Technical Skills',
        context: 'Academic & Hands-On Experience',
        icon: 'cpu',
        bullets: [
          'Developed foundational knowledge of computer hardware, including computer components, their functions, and basic troubleshooting.',
          'Gained experience with programming, web development, and software testing through academic projects.',
          'Applied problem-solving skills to understand technical issues and explore possible solutions.',
          'Continued building knowledge of both hardware and software through coursework and hands-on learning.',
        ],
      },
      {
        id: 'graphic-design-exp',
        role: 'Graphic Design & Digital Content',
        context: 'Project-Based Experience',
        icon: 'pen-tool',
        bullets: [
          'Created digital graphics and presentation materials with attention to visual consistency, layout, and readability.',
          'Used Canva to produce creative assets for academic and digital projects.',
          'Applied design principles to communicate information clearly and effectively.',
        ],
      },
    ],
  },
}

export type PortfolioData = typeof portfolioData
export type Profile = PortfolioData['profile']
export type Project = PortfolioData['projects']['items'][number]
export type SkillPill = PortfolioData['skills']['toolkitPills'][number]
