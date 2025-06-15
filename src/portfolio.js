import profile from './images/profile.png'
import AiForRecruitment from './images/beyond.png'

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
      'Automate end-to-end recruitment journey. Identified pain points, conducted market segmentation, created business model, generated revenue projections, evaluated system blueprint, developed go-to-market strategy, and built interactive mockups.',
    stack: ['Business Analysis', 'Product Strategy', 'UI/UX', 'Mockup'],
    sourceCode: '',
    livePreview: '/ai-for-recruitment',
    photo: AiForRecruitment,
  },
  {
    name: 'Digitalization for Agribusiness',
    description:
      'Empower farmers through digital market access. Conducted market analysis, designed digital solutions using WhatsApp Business API and C-Commerce, developed user journey, cost-benefit analysis, operational blueprint, and proposed a centralized model for transactions.',
    stack: ['Business Analysis', 'Product Strategy', 'WhatsApp API', 'C-Commerce'],
    sourceCode: '',
    livePreview: '/digitalization-for-agribusiness',
  },
  {
    name: 'Desk Collection Subscription',
    description:
      'Evaluate feasibility of a subscription-based debt collection solution. Conducted valuation, designed business model, simulated financial projection, reviewed blueprint, and crafted go-to-market strategy.',
    stack: ['Business Analysis', 'Financial Analysis', 'Subscription Model'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Cybersecurity Product Development',
    description:
      'Develop and launch a suite of cybersecurity services. Conducted market analysis, researched competitive landscape, developed business model, designed blueprint, defined go-to-market strategy, and collaborated with teams for digital assets.',
    stack: ['Business Analysis', 'Product Development', 'Digital Marketing', 'Cybersecurity'],
    sourceCode: '',
    livePreview: '',
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
