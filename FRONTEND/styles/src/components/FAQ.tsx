/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const faqs = [
  {
    question: 'What is easeUOL?',
    answer:
      'easeUOL is a community groups for college and university of leicester students interested in exploring the uni life for thier ease life in the community.',
  },
  {
    question: 'What is easeUOL core team?',
    answer:
      'easeUOL is an amazing community of students representing different communities and sectors of college and university . Benefits of becoming a member of a Core Team: Network with students and alumini, students and other high tech professionals.',
  },
  
  {
    question: 'How do I become a member of this club?',
    answer: `Every student of the university of Leicester is eligible to join this service,who can help and seek guidance from the other fellas of the university and interact with them for any suggestions to make thier UNI LIFE EASIER`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const FAQ: React.FC = () => {
  return (
    <div className='bg-white my-14 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                        <span className='font-medium text-gray-900'>
                          {faq.question}
                        </span>
                        <span className='ml-6 h-7 flex items-center'>
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      <p className='text-base text-gray-500'>{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
