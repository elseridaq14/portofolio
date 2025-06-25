import profile from './images/profile.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'localhost:3000',
  title: 'EQN',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Elserida Quinta  Nababan',
  role: 'Business Research Analyst',
  photo: profile,
  description:
  'A results-driven professional with 3+ years of experience in marketing, project management, and business research. Skilled in market analysis, strategic planning, product development, and stakeholder engagement. Proven ability to lead cross-functional teams, deliver measurable business outcomes, including securing investments and establishing joint ventures. A passionate, agile learner with a strong track record of achieving excellence in dynamic environments.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/elserida/',
    Whatsapp: 'https://wa.me/6281234567890',
    // github: 'https://github.com',
  },
}

const projects = [
  {
    name: 'AI for Recruitment',
    description:
      'Designed a recruitment solution leveraging AI for candidate assessment, built to support companies in evaluating talent efficiently and objectively through automated workflows.',
    stack: ['Business Analysis', 'Product Strategy'],
    sourceCode: '',
    livePreview: '/ai-for-recruitment',
  },
  {
    name: 'Digitalization for Agribusiness',
    description:
      'Empower farmers through digital market access. Conducted market analysis, designed digital solutions using WhatsApp Business API and C-Commerce, developed user journey, cost-benefit analysis, operational blueprint, and proposed a centralized model for transactions.',
    stack: ['Business Analysis', 'Product Strategy'],
    sourceCode: '',
    livePreview: '/digitalization-for-agribusiness',
  },
  {
    name: 'Cybersecurity Product Development',
    description:
      'The initiative aimed to design, validate, and launch a comprehensive suite of cybersecurity services tailored to enterprise clients in Indonesia. This project covered the full lifecycle from strategic research to execution and brand launch.',
    stack: ['Business Analysis', 'Product Development', 'Digital Marketing'],
    sourceCode: '',
    livePreview: '/cybersecurity-product-development',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Microsoft Office',
  'Data Analysis',
  'SPSS',
  'SQL',
  'Python',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'elseridanababan@gmail.com',
}

export { header, about, projects, skills, contact }
