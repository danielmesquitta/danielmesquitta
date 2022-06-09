import React from 'react';

import { Github, Globe, LinkedIn, Mail, Phone } from '~/assets';

import Container from './styles';

const SocialLinks: React.FC = () => (
  <Container>
    <a
      href="https://danielmesquitta.vercel.app"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <Globe />
      </span>
      <span>danielmesquitta.vercel.app</span>
    </a>
    <a href="https://wa.me/5534992211203" target="_blank" rel="noreferrer">
      <span>
        <Phone />
      </span>
      <span>+55 (34) 9 9221-1203</span>
    </a>
    <a
      href="https://linkedin.com/in/danielmesquitta"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <LinkedIn />
      </span>
      <span>linkedin.com/in/danielmesquitta</span>
    </a>
    <a
      href="https://github.com/danielmesquitta"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <Github />
      </span>
      <span>github.com/danielmesquitta</span>
    </a>
    <a
      href="mailto:danielmesquitta123@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <Mail />
      </span>
      <span>danielmesquitta123@gmail.com</span>
    </a>
  </Container>
);

export default SocialLinks;
