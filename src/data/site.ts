// Personal details are in site.json so they can be edited from the CMS.
// Only the navigation lives here.
import data from './site.json';

export const site = data;

export const nav = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume.pdf', label: 'Resume' },
];
