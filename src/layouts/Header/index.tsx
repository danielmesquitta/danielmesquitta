import React from 'react';

import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import Container from './styles';

const Header: React.FC = () => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <h1>
        <span>{t('header.name')}</span>
        <hr />
        <span>
          <Trans i18nKey="index:header.job" components={[<br />]} />
        </span>
      </h1>
    </Container>
  );
};

export default Header;
