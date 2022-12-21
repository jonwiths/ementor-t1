import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Faqs from './Faqs';
import AboutHeader from './AboutHeader';
import AboutMaven from './AboutMaven';
import SignUp from '../../components/addons/SignUp';
import Stats from '../../components/addons/Stats';
import Objectives from './Objectives';
import Team from './Team';
import Contacts from './Contacts';
import Map from './Map';

const About = () => {
  return (
    <section className="" id="about">
      <AboutHeader />
      <AboutMaven />
      <Stats />
      <Objectives />
      <Team />
      <Faqs />
      <Contacts />
      <SignUp />
      <Map />
    </section>
  );
};

export default About;
