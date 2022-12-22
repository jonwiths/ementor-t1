import React from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesIntro from './ServicesIntro';
import Stats from '../../components/addons/Stats';

const Services = () => {
  return (
    <section className="">
      <ServicesHeader />
      <ServicesIntro />
      <Stats />
    </section>
  );
};

export default Services;
