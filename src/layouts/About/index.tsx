import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Container from './styles';

const About: React.FC = () => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <img src="/qrcode.svg" alt={t('about.alt')} />
      <p>{t('about.title')}</p>
    </Container>
  );
};

export default About;
