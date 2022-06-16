import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import Container from './styles';
import Props from './types';

const SubTitle: React.FC<Props> = ({ titleId, id }) => {
  const { t } = useTranslation('index');

  return (
    <Container>
      <span />
      {t(`main.${titleId}.contents.${id}.title`)}
    </Container>
  );
};

export default SubTitle;
