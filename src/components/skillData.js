import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaNpm, FaSlack, FaTeamspeak } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { MdChatBubbleOutline } from 'react-icons/md';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'React.js', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'EJS' },
      { name: 'Adaptive Cards' },
      { name: 'Blockit' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'RESTful APIs', icon: TbApi },
      { name: 'Python' }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL', icon: FaDatabase }
    ]
  },
  {
    category: 'AI & Bot Development',
    skills: [
      { name: 'Dialogflow', icon: MdChatBubbleOutline },
      { name: 'IBM Watson Assistant', icon: MdChatBubbleOutline },
      { name: 'Azure Bot Framework', icon: MdChatBubbleOutline }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGitAlt },
      { name: 'Postman' },
      { name: 'Docker', icon: FaDocker },
      { name: 'VS Code' },
      { name: 'JIRA' },
      { name: 'ServiceNow' },
      { name: 'NPM', icon: FaNpm }
    ]
  },
  {
    category: 'Collaboration Platforms',
    skills: [
      { name: 'MS Teams', icon: FaTeamspeak },
      { name: 'Slack', icon: FaSlack }
    ]
  },
  {
    category: 'Others',
    skills: [
      { name: 'Problem-Solving' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
      { name: 'Project Planning' },
      { name: 'Collaboration' },
      { name: 'Teamwork' },
      { name: 'Attention to Detail' },
      { name: 'Analytical Thinking' },
      { name: 'Agile & Scrum' },
      { name: 'Continuous Improvement' },
      { name: 'Service Delivery' }
    ]
  }
];

export default skillsData;
