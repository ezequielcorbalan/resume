import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ezequiel Corbalan Resume',
  description: "This resume contains all experience i have in my Software Engineer career",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ezequiel Corbalan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Tech LEAD / Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Woowup Inc.</strong> helping design/build features for CRM Retail.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I love teaching. Nowadays, I work as a <strong className="text-stone-100">technical high school professor</strong> in <strong className="text-stone-100">Buenos aires</strong>.
        I strongly believe the next generation has the <strong className="text-stone-100">power</strong> to increase the quality of software.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I love to resolve problems, any kind of it, but mostly when I have something to learn. Food/beer lover and good travel companion.`,
  aboutItems: [
    {label: 'Location', text: 'Buenos aires, Argentina', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentinian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Sports, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Technical National University (UTN)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Woowup inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'node.js',
        level: 8,
      },
      {
        name: 'python',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'ANGULAR',
        level: 6,
      }
    ],
  },
  {
    name: 'Arquitecture',
    skills: [
      {
        name: 'AWS',
        level: 8,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'In progress',
    location: 'Internet',
    title: 'AWS Well-Architected',
    content: <p>Well-Architected course for cloud architected</p>,
  },
  {
    date: 'In progress',
    location: 'Tecnical Nacional University, UTN',
    title: 'Systems engineering',
    content: <p>Its the perfect combination to learn software and management. Has soft and hard skills to manage entire software lifetime.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sept. 2021 - Present',
    location: 'Woowup inc.',
    title: 'Tech Lead / Sr Full stack Software Engineer',
    content: (
      <p>
        Design architecture / develop Realtime / High-traffic Retail CRM Marketing application.
      </p>
    ),
  },
  {
    date: 'Mar. 2019 - Present',
    location: 'Technical School N° 21.',
    title: 'Network programming Teacher',
    content: (
        <p>
          Teach networking programing and concepts of OS.
        </p>
    ),
  },
  {
    date: 'Jun. 2020 - Sept. 2021',
    location: 'ICOMM',
    title: 'Sr Full stack Software Engineer',
    content: (
      <p>
        Develop Realtime application for email/sms sending.
      </p>
    ),
  },
  {
    date: 'Jun. 2017 - jun. 2020',
    location: 'SportClub',
    title: 'Tech Lead / Sr Full stack Software Engineer',
    content: (
        <p>
          Biometric access control / payment processing services.
        </p>
    ),
  },
  {
    date: 'Dic. 2016 - jun. 2017',
    location: 'Teracode (GCBA)',
    title: 'FrontEnd Developer',
    content: (
        <p>
          Develop Angular2 application for buenos aires government
        </p>
    ),
  },
  {
    date: 'Nov. 2015 - Nov. 2016',
    location: 'Apernet',
    title: 'Sr Full stack developer',
    content: (
        <p>
          Develop application for marketing clients
        </p>
    ),
  },
  {
    date: 'jun. 2011 - 2015',
    location: '30F',
    title: 'Analist / Developer',
    content: (
        <p>
          Develop end to end proyects for clients. Owner of the company
        </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ariel Pigni',
      text: 'Ezequiel is an accomplished IT Leader with whom I had the opportunity to work with for more than 3 years. We faced together the digital transformation of the business and the creation of the Develop Team that made it possible. He has the ability to quickly translate complex business issues into implementable technology solutions. His background as school teacher allows him to excel partnership and professional growth to all members of the Team he leads. Working with Ezequiel was a real pleasure and I look forward to working with him on future projects.',
      image: 'https://media.licdn.com/dms/image/C4E03AQEL2nVKKrzNVQ/profile-displayphoto-shrink_100_100/0/1649101783538?e=1683158400&v=beta&t=WkAoWuBlnkgYcn_YdApROMYy-ypRf3M0q00SovpUib0',
    },
    {
      name: 'Gaston Parez Brea',
      text: 'Ezequiel tiene un perfil muy técnico, con muchísimo conocimiento en la materia, pero supero pragmático proactivo y comercial, lo que lo hace aún más interesante. Desde el lado humano súper cordial y a disposición. Lo elijo para mi equipo.',
      image: 'https://media.licdn.com/dms/image/C4E03AQE2bBUGucmMEA/profile-displayphoto-shrink_100_100/0/1649524820676?e=1683158400&v=beta&t=kBLpzsFrEkh2qTw7vmiL1U4N2xw3ts7Z_pzMPIplqEE',
    },
    {
      name: 'Sebastian Seminara',
      text: 'Una de las personas más importantes que estuvo en Experiencia Futbol en el área de desarrollo. Excelentisimo profesional y lider para llevar a cabo todos los proyectos que se plantean, siempre con mirada a futuro.Aunque se planteen desafios difíciles y complejos, siempre le encuentra la forma de resolverlo. Lo super recomiendo para cualquier empresa de desarrollo. 100% comprometido y responsable.',
      image: 'https://media.licdn.com/dms/image/C4E03AQHDdgeW8EmmLg/profile-displayphoto-shrink_100_100/0/1558459441828?e=1683158400&v=beta&t=j3Z9TuQOswIVKuv-ztFIDk2XqeRPdQnqJt2McZ8-j8Q',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'send me email when ever need it.',
  items: [
    {
      type: ContactType.Email,
      text: 'ezequielcorbalan@30f.com.ar',
      href: 'mailto:ezequielcorbalan@30f.com.ar',
    },
    {
      type: ContactType.Location,
      text: 'Buenos aires , Argentina',
      href: 'https://goo.gl/maps/TWLPVtwMPacEhcoXA',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ecorbalan/'}
];
