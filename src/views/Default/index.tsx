import React from 'react';

import { Header, SocialLinks, Skills, Languages, About, Main } from '~/layouts';

import { Container } from './styles';

const Resume: React.FC = () => (
  <Container>
    <aside>
      <Header />

      <SocialLinks />

      <Skills />

      <Languages />
    </aside>

    <article>
      <About />

      <Main />
    </article>
  </Container>
);

export default Resume;
