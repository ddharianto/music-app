import loader from './loader.svg';
import logo from './logo.svg';
import record_blue from './record_blue.png';
import record_gold from './record_gold.png';
import record_korea from './record_korea.png';
import record_pink from './record_pink.png';
import record_red from './record_red.png';
import record_yellow from './record_yellow.png';
import record_logo from './record_logo.svg';
import glazersout from './glazersout.png';
import apple_music from './apple_music.png';
import user from './user.png';
import data from './data.json';
import worldwide_chart from './worldwide_chart.json';
import indonesia_chart from './indonesia_chart.json';
import song_details from './song_details.json';

import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebook } from 'react-icons/bi';

export const footer = [
  {
    title: 'Company',
    links: [
      {
        title: 'About Us',
        to: '#',
      },
      {
        title: 'Shop',
        to: '#',
      },
      {
        title: 'Careers',
        to: '#',
      },
      {
        title: 'Support',
        to: '#',
      },
      {
        title: 'Feedback',
        to: '#',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Terms',
        to: '#',
      },
      {
        title: 'Privacy Policy',
        to: '#',
      },
      {
        title: 'Cookies',
        to: '#',
      },
      {
        title: 'Accessibility',
        to: '#',
      },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      {
        to: '#',
        icon: BiLogoInstagram,
      },
      {
        to: '#',
        icon: BiLogoTwitter,
      },
      {
        to: '#',
        icon: BiLogoFacebook,
      },
    ],
  },
];

export {
  song_details,
  data,
  worldwide_chart,
  indonesia_chart,
  logo,
  loader,
  record_blue,
  record_gold,
  record_korea,
  record_pink,
  record_red,
  record_yellow,
  record_logo,
  glazersout,
  user,
  apple_music,
};
