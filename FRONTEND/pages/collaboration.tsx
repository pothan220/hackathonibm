import Head from 'next/head';
import React from 'react';
import { CollaborationCard } from '../src/components/CollaborationCard';
import { Heading } from '../src/components/Heading';
import { Footer } from '../src/components/Layouts/Footer';
import { Nav } from '../src/components/Layouts/Nav';

const collabData = [
  {
    name: 'IBM ',
    description:
      'Exclusively crafted by IBM,  Backed by IBMs renowned reliability and efficiency in post-sales service, we stand as a beacon of trust for clients at the University of Leicester (UOL). Our services are tailored to empower students with the knowledge and tools necessary to excel in the dynamic field of logistics. From cutting-edge technologies to immersive learning experiences, IBMs offerings at UOL are dedicated to nurturing the next generation of industry leaders.',
    ceoName: ' Bill Kelleher, CEO at IBM',
    title: 'On a mission to empower trust',
    about:
      'IBM UK is a leading provider of innovative technology solutions, serving clients across various industries, including finance, healthcare, retail, and government sectors. With a rich history spanning decades, IBM UK has been at the forefront of driving digital transformation and delivering cutting-edge solutions to meet the evolving needs of businesses in the region.',
    para: [
      'Our Diesel Theft Detection Solution (Diesel Eye) works towards minimizing this cost, by detecting fuel theft. Daily reports containing fuel inlet/outlet and theft information, along with GPS location and Time Stamp are sent across to the vehicle owners via our Android App and Web Dashboard.',
      'Our Smart Fleet Management Solutions help Truck owners in keeping track of Vehicle History – Servicing Information, Trips done by the vehicle, Vehicle Performance, Vehicle Document Management and Vehicle Driver Management. Trip Distances, Idle Times, Stopping Points, etc. are recorded with Google Maps for Operations Optimization in future.',
      'Our Driving Behavior Monitoring Solution (Vehicle BlackBox) has been designed to focus on enhancing Safety Standards of the driven vehicle, by keeping a check on rash driving.',
    ],
    stats: [
      { label: 'Founded', value: '1911' },
      { label: 'Employee', value: '20 thousand employees' },
    ],
    companyLink: 'https://www.ibm.com/uk-en/',
  },
];

const collaboration: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>easeUOL | Collaboration</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-24'>
        <Heading
          heading='Our Collaborations'
          description=' Collaboration is where we the easeUOL get in touch with such
            industry functioning companies where our student community gets a
            chance to explore and get hands on experience.'
        />

        <CollaborationCard content={collabData} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default collaboration;
