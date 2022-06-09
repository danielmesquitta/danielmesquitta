import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Container from './styles';
import Props from './types';

const Title: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <hr />
      {t(`main.${id}.title`)}
    </Container>
  );
};

export default Title;
