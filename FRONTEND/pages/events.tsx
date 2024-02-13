import Head from "next/head";
import React from "react";
import { EventCard } from "../src/components/EventCard";
import { EventHero } from "../src/components/EventHero";
import { Footer } from "../src/components/Layouts/Footer";
import { Nav } from "../src/components/Layouts/Nav";

const eventList = [
  {
    title: "IBM HACKATHON",
    description: `In this event COMPUTER SCIENCE CLUB OF LEICESTER IS ORGANIZING A HACKATHON FOR THE UOL STUDENTS WITH THE HELP OF IBM TEAM MEMBERS AS GUIDES`,
    date: "10 Feb 2024",
    time: "11:00 am",
    watchUrl: "",
    speakers:
      "Rithwik jain and his group members",
    registerUrl: "",
  },
  {
    title: "Introduction to 30 days of google cloud",
    description: `After the launch of the 30 Days of Google Cloud program many students reached out to the team asking fro help help with the program. So, we conducted an online webinar on Bevy helping students understand the program and solved their issues.`,
    date: "02 jan 2023",
    time: "6:00 pm",
    watchUrl: "https://youtu.be/A20gz5vF0Ss",
    speakers: "Anand",
    registerUrl: "",
  },

  
 
  {
    title: "Students union Exhibitoin",
    description: `To help the students at University of Leicester  learn different types of sports and differnt arts,students union club organizes this to help them out .`,
    date: "19 Jan 2024",
    time: "9:00 am",
    speakers: "Joe,Student's Union President",
    watchUrl: "#",
    registerUrl: "",
  },

  {
    title: "Training by IBM ",
    description: `To help students community to have exposure on technical field, so our collaboration is conduction a training to all the students on Web Development and will be offer students to work on real life project.`,
    date: "26 Feb 2024",
    time: "10:00 am",
    speakers: "IBM experts",
    watchUrl: "",
    registerUrl: "",
  },
];

const events: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>easeUOL | Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="pt-24 w-full">
        <EventHero />
        <EventCard content={eventList} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default events;
