import React from 'react';

import { Github, Globe, LinkedIn, Mail, Phone } from '~/assets';

import {
  Container,
  Header,
  SocialLinks,
  Skills,
  Languages,
  About,
  Experience,
  Education,
} from './styles';

const Resume: React.FC = () => (
  <Container>
    <aside>
      <Header>
        <h1>
          <span>Daniel Mesquita</span>
          <hr />
          <span>Full-stack software developer</span>
        </h1>
      </Header>
      <SocialLinks>
        <a
          href="https://www.danielmesquitta.vercel.app"
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
          href="https://www.linkedin.com/in/danielmesquitta"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <LinkedIn />
          </span>
          <span>linkedin.com/in/danielmesquitta</span>
        </a>
        <a
          href="https://www.github.com/danielmesquitta"
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
      </SocialLinks>
      <Skills>
        <h2>Skills / Competences</h2>
        <div>
          <h3>Front-end</h3>
          <p>
            JavaScript, TypeScript, React, React Native, Next, Redux, HTML, CSS,
            Sass, Styled Components.
          </p>
        </div>
        <hr />
        <div>
          <h3>Back-end</h3>
          <p>
            Node, Knex, PostgreSQL, Redis, Docker, Sequelize, MongoDB,
            Nodemailer, Socket.io.
          </p>
        </div>
        <hr />
        <div>
          <h3>Soft Skills</h3>
          <p>Adaptability, Determination.</p>
        </div>
      </Skills>
      <Languages>
        <h2>Languages</h2>
        <ul>
          <li>
            <img src="/us.png" alt="US flag" />
            English (Fluent)
          </li>
          <li>
            <img src="/brazil.png" alt="Brazil flag" />
            Portuguese (Native)
          </li>
        </ul>
      </Languages>
    </aside>
    <article>
      <About>
        <img src="/qrcode.png" alt="Website QR Code" />
        <p>
          Prepared for an endless learning journey, passionate about technology,
          programming and especially, evolution and daily growth.
        </p>
      </About>
      <Experience>
        <h2>
          <hr />
          Work experience
        </h2>
        <h3>
          <span />
          Estúdio Flow
        </h3>
        <h4>
          <hr />
          <strong>Akmos</strong> - Fitness App
        </h4>
        <ul>
          <li>
            <span />
            Developed the back-end and used web sockets to create a chat;
          </li>
          <li>
            <span />
            Built multiple interfaces and helped integrate the mobile app with
            the api.
          </li>
        </ul>
        <h4>
          <hr />
          <strong>Medfy</strong> - Hospital management system
        </h4>
        <ul>
          <li>
            <span />
            Created a filter and search system to find doctors, documented all
            api routes in Swagger;
          </li>
          <li>
            <span />
            Developed multiple front-end features, such as a dinamic list and a
            drag and drop component.
          </li>
        </ul>
        <h4>
          <hr />
          <strong>ICTS</strong> - Hiring risk analysis system
        </h4>
        <ul>
          <li>
            <span />
            Built multiple charts using the Apexcharts library;
          </li>
          <li>
            <span />
            Helped integrating the front-end with the api;
          </li>
          <li>
            <span />
            Was responsible for the site responsiveness.
          </li>
        </ul>
        <h2>
          <hr />
          Education
        </h2>
        <h3>
          <span />
          Graduation
        </h3>
        <h4>
          <hr />
          <strong>Pitagoras College</strong> - Information Systems Degree
        </h4>
        <ul>
          <li>
            <span />
            Currently studying
          </li>
        </ul>
        <h3>
          <span />
          Bootcamps
        </h3>
        <h4>
          <hr />
          <strong>Go stack</strong> - react, react native & node course
        </h4>
        <ul>
          <li>
            <span />
            By Diego Fernandes (Rocketseat)
          </li>
        </ul>
        <h4>
          <hr />
          <strong>ADVANCED CSS AND SASS</strong> - Web design
        </h4>
        <ul>
          <li>
            <span />
            By Jonas Schmedtmann (Udemy)
          </li>
        </ul>
        <h4>
          <hr />
          <strong>The Complete SQL Bootcamp</strong> - Postgres course
        </h4>
        <ul>
          <li>
            <span />
            By Jose Porttila (Udemy)
          </li>
        </ul>
      </Experience>
    </article>
  </Container>
);

export default Resume;
