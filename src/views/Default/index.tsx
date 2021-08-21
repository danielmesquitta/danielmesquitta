import React from 'react';

import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { Github, Globe, LinkedIn, Mail, Phone } from '~/assets';
import { generateArray } from '~/helpers';

import {
  Container,
  Header,
  SocialLinks,
  Skills,
  Languages,
  About,
  Main,
} from './styles';
import Props from './types';

const Resume: React.FC<Props> = ({ type = 'fullstack' }) => {
  const { t } = useTranslation(type);

  return (
    <Container>
      <aside>
        <Header>
          <h1>
            <span>{t('header.name')}</span>
            <hr />
            <span>
              <Trans i18nKey={`${type}:header.job`} components={[<br />]} />
            </span>
          </h1>
        </Header>
        <SocialLinks>
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
          <a
            href="https://wa.me/5534992211203"
            target="_blank"
            rel="noreferrer"
          >
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
        </SocialLinks>
        <Skills>
          <h2>{t('skills.title')}</h2>
          {generateArray(3).map((index) => (
            <>
              <div>
                <h3>{t(`skills.contents.${index}.subTitle`)}</h3>
                <p>{t(`skills.contents.${index}.text`)}</p>
              </div>
              {index < 2 && <hr />}
            </>
          ))}
        </Skills>
        <Languages>
          <h2>{t('languages.title')}</h2>
          <ul>
            {['/us.png', '/brazil.png'].map((src, index) => (
              <li>
                <img {...{ src }} alt={t(`languages.contents.${index}.alt`)} />
                {t(`languages.contents.${index}.text`)}
              </li>
            ))}
          </ul>
        </Languages>
      </aside>
      <article>
        <About>
          <img src="/qrcode.svg" alt={t('about.alt')} />
          <p>{t('about.title')}</p>
        </About>
        <Main>
          {generateArray(2).map(
            (id) =>
              !t(`main.${id}.title`).split(':')[1] && (
                <>
                  <h2>
                    <hr />
                    {t(`main.${id}.title`)}
                  </h2>
                  {generateArray(2).map(
                    (index) =>
                      !t(`main.${id}.contents.${index}.title`).split(
                        ':'
                      )[1] && (
                        <>
                          <h3>
                            <span />
                            {t(`main.${id}.contents.${index}.title`)}
                          </h3>
                          {generateArray(4).map(
                            (idx) =>
                              !t(
                                `main.${id}.contents.${index}.subContents.${idx}.title.0`
                              ).split(':')[1] && (
                                <>
                                  <h4>
                                    <hr />
                                    <strong>
                                      {t(
                                        `main.${id}.contents.${index}.subContents.${idx}.title.0`
                                      )}
                                    </strong>
                                    {` - ${t(
                                      `main.${id}.contents.${index}.subContents.${idx}.title.1`
                                    )}`}
                                  </h4>
                                  <ul>
                                    {generateArray(4).map(
                                      (i) =>
                                        !t(
                                          `main.${id}.contents.${index}.subContents.${idx}.texts.${i}`
                                        ).split(':')[1] && (
                                          <li>
                                            <span />
                                            {t(
                                              `main.${id}.contents.${index}.subContents.${idx}.texts.${i}`
                                            )}
                                          </li>
                                        )
                                    )}
                                  </ul>
                                </>
                              )
                          )}
                        </>
                      )
                  )}
                </>
              )
          )}
        </Main>
      </article>
    </Container>
  );
};

export default Resume;
