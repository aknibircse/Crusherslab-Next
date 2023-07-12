import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';
import dribbble from 'assets/images/icons/dribbble.png';

export const menuItems = [
  {
    id: 2,
    title: 'About Us',
    items: [
      {
        path: '/contact-us',
        label: 'Contact Us',
      },
      {
        path: '/about-us',
        label: 'About Us',
      },
      {
        path: '#!',
        label: 'Copyright',
      },
      
     
    ],
  },
  {
    id: 3,
    title: 'More Info',
    items: [
      {
        path: '/career',
        label: 'Careers',
      },
      {
        path: '#!',
        label: 'Case Study',
      },
      {
        path: '#!',
        label: 'Events',
      },
      {
        path: '#!',
        label: 'News',
      },
    ],
  },
  {
    id: 4,
    title: 'Our Wings',
    items: [
      {
        path: '#!',
        label: 'QA Nexus Academy',
      },
      {
        path: '#!',
        label: 'Team Thunder',
      },
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: '#!',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: '#!',
        icon: twitter,
        label: 'Twitter',
      },
      {
        path: '#!',
        icon: github,
        label: 'Github',
      },
      {
        path: '#!',
        icon: dribbble,
        label: 'Dribbble',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
