import { BsInstagram } from 'react-icons/Bs';
import { BsGithub } from 'react-icons/Bs';
import { BsTwitter } from 'react-icons/Bs';
import { BsYoutube } from 'react-icons/Bs';
import { BsLinkedin } from 'react-icons/Bs';

const navigation = [
  {
    name: 'GitHub',
    href: '#',
    icon: BsGithub,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: BsInstagram,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: BsTwitter,
  },

  {
    name: 'Youtube',
    href: '#',
    icon: BsYoutube,
  },
  {
    name: 'Linkedin',
    href: '#',
    icon: BsLinkedin,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className='bg-white mb-5'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-base text-gray-400'>
          &copy; 2024 EaseUOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
