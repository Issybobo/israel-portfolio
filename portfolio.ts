import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Israel Ogunsola',
  title: "Hi all, Israel",
  description:
    "I am a passionate Full Stack Web3 developer with expertise in building web applications using React.js, Node.js, Express.js, and Mongo DB . My experience extends to Web3 development, specifically on Ethereum, where I work with technologies such as Solidity, Ethers.js, Hardhat and writing smart contract code. My passion lies in crafting innovative solutions and leveraging cutting-edge technologies to create seamless and robust web2 and web3 experiences.",
  resumeLink:
    'https://drive.google.com/file/d/1o0lIDv8q2s9iRiYbJcyqtzfJsXIpVtd3/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'Issybobo',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Issybobo',
  linkedin: 'https://www.linkedin.com/in/israel-ogunsola-480a81244',
  github: 'https://github.com/Issybobo',
  instagram: 'https://www.instagram.com/iam__israel?igshid=OGQ5ZDc2ODk2ZA==',
  facebook: 'https://www.facebook.com/israel.ogunsola.5',
  twitter: 'https://twitter.com/israel_ogunsola?lang=en',
};

export const skillsSection: SkillsSectionType = {
  title: 'Services i offer',
  subTitle: ' ENTHUSIASTIC FULLSTACK WEB3 DEVELOPER WITH THE ABILITY TO OFFER SOLUTIONS UTILIZING VARIOUS TECHNOLOGIES.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Developing responsive Application and Web Application using in React.js, React Native and Node js'
        ),
        emoji('⚡ Building responsive static websites using Next.js, Tailwind css'),
        emoji('⚡ Devloping Backend APIs  using Node js, Express js and Mongo DB'),
        emoji('⚡ Expereience in using technologies like google map api, firebase, websocket, github etc'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Technical Writing',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience in writing Technical Documentation based on Web2 and Web3 Technologies'),
        emoji(
          '⚡ Expertise in crafting User Manual, Whitepaper and content on Web Project'
        ),
        emoji(
          '⚡ Writing of version control system for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Web3 Development',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity and other technologies'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing Token and NFTS  Smart Contracts using ERC-20 and ERC-721 Token Standard'),
        emoji(
          '⚡ Building Decentralized applications with React.js & Solidity using Ethers.js, Thirdweb & IPFS'
        ),
        emoji(
          '⚡ Developing DEFI Protocol on Layer 2 blockchain, Decentralized Exchange, Cross Chain platform'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '85',
  },
  {
    Stack: 'Web3',
    progressPercentage: '95',
  },
  {
    Stack: 'Technical Writing',
    progressPercentage: '95',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of California, Davis (Coursera)',
    subHeader: 'Javascript Specialization',
    duration: 'April 2022 - October 2022',
    desc: 'Participated in coding challenge and completed 4 project.',
    grade: 'Grade A',
    descBullets: [
      'The JavaScript specialization at the University of California, Davis, is a focused program providing hands-on training in essential and advanced JavaScript concepts for web development. Led by experienced instructors, it prepares graduates to excel in real-world coding challenges and contribute to dynamic web applications, aligning with industry standards and the university commitment to quality education in technology.'
      
    ],
  },

  {
    schoolName: 'University of Buffalo (Coursera)',
    subHeader: 'Blockchain Specialization',
    duration: 'June 2022 - October 2022',
    desc: 'Participated in coding challenge and completed 2 project.',
    grade: 'Grade A',
    descBullets: [
      'The Blockchain Specialization at the University of Buffalo is a comprehensive program designed to offer hands-on training in fundamental and advanced blockchain concepts. Guided by seasoned instructors, the specialization equips graduates to navigate real-world challenges in blockchain development, fostering the creation of innovative solutions. Aligned with industry standards.'
      
    ],
  },
  
];

export const experience: ExperienceType[] = [
  {
    role: 'Web Developer',
    company: 'Freelancer',
    companyLogo: '/img/icons/common/freelance.png',
    date: 'Apr 2021 – Jun 2022',
    desc: 'I worked as a freelance web developer to design and develop web based application  for mulitple clients using React, Tailwind css and some other tools. I earned praise and positive reviews for exceeding client expectations for doing amazing job for them and helping them reach their target audience through my services',
  },
  {
    role: 'Solidity Developer',
    company: 'Grandida LLC',
    companyLogo: '/img/icons/common/grandida.jpg',
    date: 'October 2022 – Present',
    desc: 'I work as a Solidity Developer, specializing in designing, coding, and deploying secure DeFi smart contracts, collaborating on cross-functional teams, conducting testing and debugging, staying abreast of industry trends, participating in code reviews, and troubleshooting issues.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Backend Developer Team Lead',
    company: 'Tekyville LLC',
    companyLogo: '/img/icons/common/tekyville.jpg',
    date: 'July 2023 - Present',
    desc: ' As the Backend Team Lead for the LogiTracer Supply Chain App, I directed the development of the supply chain management backend, collaborated closely with frontend and mobile teams, achieved real-time tracking implementation, and consistently met project milestones.',
  },
  {
    role: 'Web3 Technical Writer',
    company: 'Medium',
    companyLogo: '/img/icons/common/download.png',
    date: 'Present',
    desc: 'I work as a Web3 Technical Writer, adept at translating complex concepts of the Solidity development process into user-friendly documentation. My role involves collaborating with cross-functional teams, participating in code reviews, and ensuring comprehensive documentation aligns with industry trends and user needs.',
  },
];

export const projects: ProjectType[] = [
  
  {
    name: 'Defix Wallet Exchange ',
    desc: 'Defix Wallet is a software application that enables individuals or businesses to make any type of cryptocurrency transacations electronically on the blockchain network it also stores the payment information of users for different payment modes.',
    github: 'https://github.com/Issybobo/Defix-Wallet',
    link: 'https://defixwallet.000webhostapp.com/',
  },
  {
    name: 'Tokmart NFT Marketplace',
    desc: 'TokMart, a collaborative effort by four experienced developers, is a user-friendly NFT marketplace. Offering secure transactions, diverse blockchain support, and a vibrant community, it stands out in the NFT space ensuring transparency  ',
    github: 'https://github.com/Issybobo/Tokmart-',
    link: 'https://tokmart.vercel.app/',
  },
  {
    name: 'Iodine Decentralized App',
    desc: 'Iodine, is a collaborative hackathon project, transforms decentralized finance with robust security. It introduces a Token Contract, Iodine Contract for asset protection, and a Tribunal Contract with Mech NFTs for theft cases, setting a new standard through functions like `reportOwnershipTheft`.',
    github: 'https://github.com/Issybobo/iodine',
    link: 'https://iodine-dapp.vercel.app/',
  },
  {
    name: 'Tech Haven Ecommerce ',
    desc: 'Tech Haven Ecommerce is an online e-commerce store, with a responsive design, secure transactions, seamlessly powered by Stripe, ensuring a safe and reliable shopping experience. Including a user-friendly admin dashboard, powered by Payload CMS to manage and customize store.',
    github: 'https://github.com/Issybobo/',
    link: 'https://e-commerce-payload-8e26543.payloadcms.app/'
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'After Israel successfully developed our decentralized application, our company experienced a significant increase in client acquisition. The user-friendly interface and enhanced functionality attracted a growing number of clients eager to engage in token trading, contributing to our success in the market.',
  },
  {
    name: 'Angela Rose',
    feedback:
      " In my experience, I've never met a Fullstack Web3 developer as devoted to client success as Israel. His unparalleled commitment places him as my top recommendation. Trustworthy, skilled, and client-focused, he embodies excellence in every project. Additionally, he ensures a seamless experience for end-users. ",
  },
  {
    name: 'Micheal Joel',
    feedback:
      " I recently collaborated with Israel on a web development project, and I'm beyond impressed! His attention to detail, innovative solutions, and prompt delivery truly set him apart. Working with Israel was not just a service; it was an experience. If you're seeking a dedicated and skilled developer, look no further",
  },
  {
    name: 'Mary Riches',
    feedback:
    " After struggling to create a professional website since 2017, I'm delighted to share that I've successfully enlisted the expertise of Israel. His assistance was instrumental in crafting an outstanding website that truly reflects my vision and goals. Grateful for the collaboration, I now have a digital presence that stands out.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Israel Ogunsola',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Israel Ogunsola',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Israel',
    'Israelite',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Israel Portfolio ',
    'Israel Ogunsola Portfolio',
  ],
};
