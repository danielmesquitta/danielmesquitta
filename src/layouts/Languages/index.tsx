import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Container from './styles';

const Languages: React.FC = () => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <h2>{t('languages.title')}</h2>
      <ul>
        {['/us.png', '/brazil.png'].map((src, index) => (
          <li>
            <img {...{ src }} alt={t(`languages.contents.${index}.alt`)} />
            {t(`languages.contents.${index}.text`)}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Languages;
